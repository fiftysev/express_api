import { IUser } from "./interfaces/user.interface";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  avatar: { type: String, default: "" },
  background: { type: String, default: "" },
  name: { type: String, required: true },
  username: { type: String, required: true },
  country: { type: String, default: "" },
  link: { type: String, default: "" },
  description: { type: String, default: "" },
  followers: { type: Number, default: 0, required: true },
  following: { type: Number, default: 0, required: true },
});

export default model<IUser>("User", UserSchema);
