import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


const publicRoutes = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

const adminRoutes = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    // if (!publicRoutes(req)) await auth.protect();
    const { userId, redirectToSignIn, sessionClaims } = await auth()
    if (!userId && !publicRoutes(req)) return redirectToSignIn()

    // admin route
    if (adminRoutes(req) && sessionClaims?.metadata.role !== 'admin') {
        return NextResponse.redirect(new URL('/not-authorize', req.url));
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};