import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import axios from "axios";

async function authenticateUser(username: string, password: string) {
  const res = await axios.post(
    "https://api-secure-petroleum-climate.eng.cmu.ac.th/css-user",
    {
      username: username,
      password: password,
    }
  );
  if (res.status === 200) {
    return res.data.ok;
  } else {
    return false;
  }
}

export async function POST(request: NextRequest) {
  //get username , password from request
  const { username, password } = await request.json();

  //check if the user exists
  const userIsExist = await authenticateUser(username, password);
  //if user exists and password is correct then save the user in session
  if (userIsExist) {
    const token = jwt.sign(
      { user_name: userIsExist.username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "12h",
      }
    );

    return NextResponse.json({ token: token }, { status: 200 });
  }

  //if user does not exist or password is incorrect
  return NextResponse.json(
    { error: "Invalid username or password" },
    { status: 400 }
  );
}
