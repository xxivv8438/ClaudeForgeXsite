import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Forge X route protection proxy.
 * Guards /dashboard/* and /admin/* routes.
 * Checks for a 'forge-session' cookie — redirects to /login if absent.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get('forge-session')

  const isProtectedDashboard = pathname.startsWith('/dashboard')
  const isProtectedAdmin = pathname.startsWith('/admin')

  if ((isProtectedDashboard || isProtectedAdmin) && !session?.value) {
    const loginUrl = new URL('/login', request.url)
    // Preserve the original destination so login can redirect back
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
}
