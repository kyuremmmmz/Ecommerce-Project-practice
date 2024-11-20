"use server"
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const user = req.cookies.get('admin');
    if (!user) {
        return NextResponse.redirect(new URL('/page/login', req.url))
    }
}
export const config = {
    matcher: ['/', '/page/about']
}