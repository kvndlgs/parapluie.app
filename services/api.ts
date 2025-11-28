/**
 * API Services for Trusted Contact Dashboard
 */

import { supabase } from './supabase';
import {
  SafetyEvent,
  TrustedContact,
  ContactStatus,
  Senior,
  EventType,
  EventStatus,
  ThreatLevel,
} from '../types/models';

// ============================================================================
// SENIORS (people the trusted contact monitors)
// ============================================================================

/**
 * Get all seniors that this trusted contact monitors
 */
export async function getSeniors(): Promise<Senior[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  // Get all active trusted_contact relationships where this user is the contact
  const { data: contacts, error: contactsError } = await supabase
    .from('trusted_contacts')
    .select(`
      id,
      senior_id,
      contact_status,
      can_view_alerts,
      can_receive_notifications,
      can_view_location,
      can_access_calendar,
      can_modify_settings,
      alert_level
    `)
    .eq('contact_user_id', user.id)
    .eq('contact_status', ContactStatus.ACTIVE);

  if (contactsError) throw contactsError;

  if (!contacts || contacts.length === 0) {
    return [];
  }

  // Get senior profiles for each contact
  const seniorIds = contacts.map((c) => c.senior_id);
  const { data: profiles, error: profilesError } = await supabase
    .from('user_profiles')
    .select('*')
    .in('id', seniorIds);

  if (profilesError) throw profilesError;

  // Transform to Senior objects
  const seniors: Senior[] = (profiles || []).map((profile) => ({
    id: profile.id,
    profile: {
      id: profile.id,
      firstName: profile.first_name,
      lastName: profile.last_name,
      preferredName: profile.preferred_name,
      phoneNumber: profile.phone_number,
      email: profile.email,
      dateOfBirth: profile.date_of_birth,
      language: profile.language || 'en',
      timezone: profile.timezone || 'America/Montreal',
    },
    stats: {
      totalCallsBlocked: 0,
      totalMessagesBlocked: 0,
      totalThreatsDetected: 0,
      highestThreatLevel: ThreatLevel.NONE,
      streakDays: 0,
      protectionScore: 100,
      since: profile.created_at,
    },
    settings: {
      protectionLevel: 'high',
      callProtectionEnabled: true,
      smsProtectionEnabled: true,
      locationAlertsEnabled: false,
      notificationsEnabled: true,
      autoBlockUnknownNumbers: false,
      autoBlockInternational: false,
      quietHoursEnabled: false,
      emergencyBypass: [],
    },
    lastActiveAt: profile.updated_at,
  }));

  return seniors;
}

/**
 * Get a specific senior by ID
 */
export async function getSeniorById(seniorId: string): Promise<Senior | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  // Verify this trusted contact has access to this senior
  const { data: contact, error: contactError } = await supabase
    .from('trusted_contacts')
    .select('*')
    .eq('contact_user_id', user.id)
    .eq('senior_id', seniorId)
    .eq('contact_status', ContactStatus.ACTIVE)
    .single();

  if (contactError || !contact) {
    return null;
  }

  // Get senior profile
  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', seniorId)
    .single();

  if (profileError || !profile) {
    return null;
  }

  return {
    id: profile.id,
    profile: {
      id: profile.id,
      firstName: profile.first_name,
      lastName: profile.last_name,
      preferredName: profile.preferred_name,
      phoneNumber: profile.phone_number,
      email: profile.email,
      dateOfBirth: profile.date_of_birth,
      language: profile.language || 'en',
      timezone: profile.timezone || 'America/Montreal',
    },
    stats: {
      totalCallsBlocked: 0,
      totalMessagesBlocked: 0,
      totalThreatsDetected: 0,
      highestThreatLevel: ThreatLevel.NONE,
      streakDays: 0,
      protectionScore: 100,
      since: profile.created_at,
    },
    settings: {
      protectionLevel: 'high',
      callProtectionEnabled: true,
      smsProtectionEnabled: true,
      locationAlertsEnabled: false,
      notificationsEnabled: true,
      autoBlockUnknownNumbers: false,
      autoBlockInternational: false,
      quietHoursEnabled: false,
      emergencyBypass: [],
    },
    lastActiveAt: profile.updated_at,
  };
}

// ============================================================================
// SAFETY EVENTS
// ============================================================================

/**
 * Get safety events for a senior
 */
export async function getEventsForSenior(
  seniorId: string,
  options?: {
    limit?: number;
    offset?: number;
    type?: EventType;
    threatLevel?: ThreatLevel;
  }
): Promise<SafetyEvent[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  // Verify access
  const { data: contact } = await supabase
    .from('trusted_contacts')
    .select('can_view_alerts, alert_level')
    .eq('contact_user_id', user.id)
    .eq('senior_id', seniorId)
    .eq('contact_status', ContactStatus.ACTIVE)
    .single();

  if (!contact || !contact.can_view_alerts) {
    throw new Error('No permission to view events for this senior');
  }

  let query = supabase
    .from('safety_events')
    .select('*')
    .eq('user_id', seniorId)
    .order('created_at', { ascending: false });

  // Apply filters
  if (options?.type) {
    query = query.eq('event_type', options.type);
  }

  if (options?.threatLevel) {
    query = query.eq('threat_level', options.threatLevel);
  }

  // Apply alert level filter based on contact permissions
  if (contact.alert_level === 'high') {
    query = query.in('threat_level', ['high', 'critical']);
  } else if (contact.alert_level === 'critical') {
    query = query.eq('threat_level', 'critical');
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 20) - 1);
  }

  const { data, error } = await query;

  if (error) throw error;

  // Transform from DB format
  return (data || []).map(transformEventFromDB);
}

/**
 * Get recent events across all monitored seniors
 */
export async function getRecentEvents(limit: number = 20): Promise<SafetyEvent[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  // Get all senior IDs this contact monitors
  const { data: contacts } = await supabase
    .from('trusted_contacts')
    .select('senior_id, can_view_alerts, alert_level')
    .eq('contact_user_id', user.id)
    .eq('contact_status', ContactStatus.ACTIVE)
    .eq('can_view_alerts', true);

  if (!contacts || contacts.length === 0) {
    return [];
  }

  const seniorIds = contacts.map((c) => c.senior_id);

  const { data, error } = await supabase
    .from('safety_events')
    .select('*')
    .in('user_id', seniorIds)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;

  return (data || []).map(transformEventFromDB);
}

/**
 * Get event statistics for a senior
 */
export async function getEventStats(seniorId: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  // Get all events for this senior
  const { data, error } = await supabase
    .from('safety_events')
    .select('event_type, threat_level, event_status')
    .eq('user_id', seniorId);

  if (error) throw error;

  const events = data || [];

  return {
    totalEvents: events.length,
    blockedCalls: events.filter((e) => e.event_type === 'call' && e.event_status === 'blocked').length,
    blockedSms: events.filter((e) => e.event_type === 'sms' && e.event_status === 'blocked').length,
    criticalThreats: events.filter((e) => e.threat_level === 'critical').length,
    highThreats: events.filter((e) => e.threat_level === 'high').length,
    mediumThreats: events.filter((e) => e.threat_level === 'medium').length,
  };
}

// ============================================================================
// TRUSTED CONTACTS
// ============================================================================

/**
 * Get pending invitations for the current user
 */
export async function getPendingInvitations(): Promise<TrustedContact[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  // Find pending invitations that match this user's email
  const { data, error } = await supabase
    .from('trusted_contacts')
    .select('*')
    .eq('email', user.email)
    .eq('contact_status', ContactStatus.PENDING);

  if (error) throw error;

  return (data || []).map(transformContactFromDB);
}

// ============================================================================
// HELPERS
// ============================================================================

function transformEventFromDB(dbEvent: any): SafetyEvent {
  return {
    id: dbEvent.id,
    userId: dbEvent.user_id,
    type: dbEvent.event_type as EventType,
    status: dbEvent.event_status as EventStatus,
    threatLevel: dbEvent.threat_level as ThreatLevel,
    timestamp: dbEvent.timestamp || dbEvent.created_at,
    metadata: dbEvent.metadata || {},
    walterAnalysis: dbEvent.walter_analysis,
    userFeedback: dbEvent.user_feedback,
    trustedContactNotified: dbEvent.trusted_contact_notified || false,
    createdAt: dbEvent.created_at,
    updatedAt: dbEvent.updated_at,
  };
}

function transformContactFromDB(dbContact: any): TrustedContact {
  return {
    id: dbContact.id,
    seniorId: dbContact.senior_id,
    status: dbContact.contact_status as ContactStatus,
    profile: {
      name: dbContact.name,
      relationship: dbContact.relationship,
      phoneNumber: dbContact.phone_number,
      email: dbContact.email,
      preferredContactMethod: dbContact.preferred_contact_method,
    },
    permissions: {
      canViewAlerts: dbContact.can_view_alerts,
      canReceiveNotifications: dbContact.can_receive_notifications,
      canViewLocation: dbContact.can_view_location,
      canAccessCalendar: dbContact.can_access_calendar,
      canModifySettings: dbContact.can_modify_settings,
      alertLevel: dbContact.alert_level,
    },
    invitationCode: dbContact.invitation_code,
    invitedAt: dbContact.invited_at,
    acceptedAt: dbContact.accepted_at,
    lastActiveAt: dbContact.last_active_at,
  };
}
