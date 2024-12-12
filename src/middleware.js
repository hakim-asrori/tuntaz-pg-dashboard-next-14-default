import axios from "axios";
import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import { CODE, SERVICE } from "./_constant/api";

export async function middleware(request) {
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

  if (token && token.value) {
    try {
      const responseApi = await axios.post(
        new URL(SERVICE.AUTH.PROFILE, request.url),
        {},
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );

      if (responseApi.data.status == CODE.ERROR) {
        const response = NextResponse.redirect(new URL("/sign", request.url));
        response.cookies.delete("TTPG");
        return response;
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL("/sign", request.url));
      response.cookies.delete("TTPG");
      return response;
    }
  }

  if (token && ["/sign", "/sign/in", "/sign/up", "/"].includes(currentPath)) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    return response;
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/sign/:path*"],
};
