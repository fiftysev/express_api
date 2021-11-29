import { Document } from "mongoose";

export interface IUser extends Document {
  id?: string;
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
