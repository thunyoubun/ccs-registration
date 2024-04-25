import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // Check if the user is authenticated
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Verify the token
  const response = await verifyAuth(token);
  if (!response.ok) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const verifyAuth = async (token: string) => {
  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    if (!decoded) {
      throw new Error("Invalid token");
    }
    return Response.json({ ok: true, message: "Valid token" });
  } catch (error) {
    return Response.json({ ok: false, message: "Invalid token" });
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
};
