import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, protectedRoutes } from "./router/protectedroutes";

const expiredAtCache = new Map<string, number>();

const middleware = (request: NextRequest) => {
    const currentUser = request.cookies.get("currentUser")?.value;
    const { pathname } = request.nextUrl;

    if (!currentUser) {
        if (protectedRoutes.includes(pathname)) {
            request.cookies.delete("currentUser");
            const response = NextResponse.redirect(new URL("/login", request.url));
            response.cookies.delete("currentUser");
            return response;
        }
    } else {
        if (!expiredAtCache.has(currentUser)) {
            expiredAtCache.set(currentUser, JSON.parse(currentUser).expiredAt);
        }
        const expiredAt = expiredAtCache.get(currentUser);
        if (Date.now() > expiredAt) {
            expiredAtCache.delete(currentUser);
            request.cookies.delete("currentUser");
            const response = NextResponse.redirect(new URL("/login", request.url));
            response.cookies.delete("currentUser");
            return response;
        }
        if (authRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }
    return;
};

export default middleware;