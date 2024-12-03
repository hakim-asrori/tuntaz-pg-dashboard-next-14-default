import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function middleware(request) {
  // Acronym From Token Tuntaz Payment Gateway
  const token = request.cookies.get("TTPG");

  const currentPath = new URL(request.url).pathname;

  if (!token && currentPath !== "/sign") {
    const response = NextResponse.redirect(new URL("/sign", request.url));
    return response;
  }

  if (token && !token.value) {
    const response = NextResponse.redirect(new URL("/sign", request.url));
    response.cookies.delete("TTPG");
    return response;
  }

  if (token && ["/sign", "/sign/in", "/sign/up", "/"].includes(currentPath)) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    return response;
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/", "/dashboard", "/sign", "/sign/in", "/sign/up"],
};
