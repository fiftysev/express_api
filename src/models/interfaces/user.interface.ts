import { Document } from "mongoose";

export interface IUser extends Document {
  _id?: string;
  id: number;
  avatar: string;
  background?: string;
  country?: string;
  link?: string;
  description?: string;
  name: string;
  username: string;
  followers: number;
  following: number;
}
