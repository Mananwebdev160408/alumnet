import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userschema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true , required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  username: { type: String, required: true },
  refreshtoken: { type: String},
  descryption:{type:String, default:""},
  college:{type:String},
  isEmployed:{type:Boolean,required:true},
  company:{type:String}
},{timestamps:true});

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userschema.method("isPasswordCorrect", async function (password) {
  return await bcrypt.compare(password, this.password);
});

userschema.method("generaterefreshtoken", async function () {
  try {
    const refreshtoken= jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    });
    this.refreshtoken = refreshtoken;
    await this.save();
    return refreshtoken;
  } catch (error) {
    console.log(error);
  }
});
userschema.method("generateaccesstoken", async function () {
  try {
    return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
  } catch (error) {
    console.log(error);
  }
});

export const User = mongoose.models.User || mongoose.model("User", userschema);
export default User;
