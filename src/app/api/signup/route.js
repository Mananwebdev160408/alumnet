import { dbconnect } from "../../../db/dbconnect";
import User from "../../../models/user.model";
import { NextResponse } from "next/server";
await dbconnect();

export async function POST(req) {
  const reqbody = await req.json();
  const { name, email, password, role, username } = reqbody;
  const existinguser = await User.findOne({ email });
  if (existinguser)
    return NextResponse.json(
      { message: "user already exist" },
      { status: 400 }
    );
  const mongores =await  User.create({
    username,
    email,
    password,
    role,
    name,
  });
  if(!mongores) return NextResponse.json({message:"something went wrong"},{status:500})
  return NextResponse.json({message:"user created successfully",mongores},{status:200})
}
