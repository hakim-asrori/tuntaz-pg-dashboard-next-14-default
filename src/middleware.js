import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function middleware(request) {
  // Acronym From Token Tuntaz Payment Gateway
  const token = request.cookies.get("TTPG");

  const currentPath = new URL(request.url).pathname;

  if (!token && currentPath !== "/sign") {
    return NextResponse.redirect(new URL("/sign", request.url));
  }

  if (token && ["/sign", "/sign/in", "/sign/up", "/"].includes(currentPath)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/sign", "/sign/in", "/sign/up"],
};
