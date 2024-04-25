import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../Datas/User.json";

async function authenticateUser(username: string, password: string) {
  const user = User.user.find(
    (user) => user.username === username && user.password === password
  );
  return user;
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
        expiresIn: "24hr",
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
