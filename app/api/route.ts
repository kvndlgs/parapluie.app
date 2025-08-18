import { NextRequest, NextResponse } from 'next/server'
import { WaitlistEntry, GoogleAppsScriptResponse } from '@/types'

const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwLExMzR_iqFjh7D4F1ENsboYY2AIg00Pc0bZZoQ_vMuzgAUX4rw1aNSIh5XiIqlHw/exec'

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistEntry = await request.json()

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Submit to Google Sheets
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`)
    }

    const result: GoogleAppsScriptResponse = await response.json()

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Successfully joined waitlist' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to submit to waitlist' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Waitlist API endpoint' },
    { status: 200 }
  )
}