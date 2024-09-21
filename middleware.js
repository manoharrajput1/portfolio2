import { getToken } from "next-auth/jwt";

import { NextResponse } from 'next/server'


export async function middleware(req) {
    const data = await getToken({req})
    if(!data){
        return NextResponse.redirect(new URL('/', req.url))
    }
}

export const config = {
    matcher: ['/contact/:path*']
}
