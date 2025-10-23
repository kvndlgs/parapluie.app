import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  // Handle OAuth error
  if (error) {
    console.error("OAuth error:", error, errorDescription);

    // Redirect to app with error
    return NextResponse.redirect(
      `parapluie://auth/callback?error=${encodeURIComponent(error)}&error_description=${encodeURIComponent(errorDescription || "")}`,
    );
  }

  // Handle successful OAuth callback
  if (code) {
    console.log("OAuth success, redirecting to app with code");

    // Redirect to mobile app with auth code
    return NextResponse.redirect(
      `parapluie://auth/callback?code=${encodeURIComponent(code)}`,
    );
  }

  // No code or error - invalid callback
  console.error("Invalid OAuth callback - no code or error");

  return NextResponse.json(
    { error: "Invalid OAuth callback" },
    { status: 400 },
  );
}
