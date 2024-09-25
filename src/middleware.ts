import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isConnected = request.cookies.get('radix_connected');

  // List of paths that require Radix connection
  const protectedPaths = ['/admin', '/user'];

  if (protectedPaths.some(path => pathname.startsWith(path)) && !isConnected) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};