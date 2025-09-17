import { dbconnect } from "../../../db/dbconnect";
import User from "../../../models/user.model";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
await dbconnect();

export async function POST(req) {
  const reqbody = await req.json();
  const { email, password } = reqbody;
  const existinguser = await User.findOne({ email });
  if (!existinguser)
    return NextResponse.json(
      { message: "user does not exist" },
      { status: 400 }
    );
  const isPasswordCorrect = await existinguser.isPasswordCorrect(password);
  if (!isPasswordCorrect)
    return NextResponse.json(
      { message: "password is incorrect" },
      { status: 400 }
    );
  const refreshtoken = await existinguser.generaterefreshtoken();
  const accesstoken = await existinguser.generateaccesstoken();
  if (!refreshtoken || !accesstoken)
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  const cookiestore = await cookies();
  cookiestore.set("refreshtoken", refreshtoken, {
    httpOnly: true,
    secure: true,
  });
  cookiestore.set("accesstoken", accesstoken, { httpOnly: true, secure: true });
return NextResponse.json({message:"user logged in successfully", refreshtoken,accesstoken},{status:200})
}
