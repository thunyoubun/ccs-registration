import { deleteCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
//logout route
export async function POST(req: NextRequest) {
  //clear the cookie
  cookies().delete("token");

  return NextResponse.json(
    { message: "Logout success", ok: true },
    { status: 200 }
  );
}
