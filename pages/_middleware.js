import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    // Set CSP with frame-ancestors to control which domains can embed your page
    const allowedSites = 'https://allowed-site.com https://another-allowed-site.com';
    response.headers.set('Content-Security-Policy', `frame-ancestors 'self' ${allowedSites};`);

    return response;
}
