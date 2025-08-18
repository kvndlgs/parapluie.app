export interface WaitlistEntry {
  firstName: string;
  lastName: string;
  email: string;
}

// For the form submission response
export interface SubmissionResponse {
  success: boolean;
  error?: string;
  message?: string;
}

// For form validation errors
export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  general?: string;
}

// For form state management
export interface FormState {
  data: WaitlistEntry;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

// If you're using a form component props
export interface WaitlistFormProps {
  onSubmit?: (data: WaitlistEntry) => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  isFullFormVisible?: boolean;
  setIsFullFormVisible?: (visible: boolean) => void;
  closeForm: () => void;
  className?: string;
}

// For the Google Apps Script response
export interface GoogleAppsScriptResponse {
  success: boolean;
  error?: string;
}
