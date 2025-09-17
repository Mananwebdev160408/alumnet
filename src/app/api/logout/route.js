import { dbconnect } from "../../../db/dbconnect";
import User from "../../../models/user.model";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
await dbconnect();

export async function GET() {
  try {
    const cookiestore = await cookies();
    cookiestore.delete("accesstoken");
    cookiestore.delete("refreshtoken");
    return NextResponse.json(
      { message: "user logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
