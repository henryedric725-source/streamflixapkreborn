import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// TODO: replace with the real apex domain before deploying.
const APEX_HOST = "streamflixapk.example";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (host === `www.${APEX_HOST}`) {
    const destination = request.nextUrl.clone();
    destination.hostname = APEX_HOST;
    destination.protocol = "https:";
    return NextResponse.redirect(destination, 301);
  }
}

export const config = {
  matcher: "/:path*",
};
