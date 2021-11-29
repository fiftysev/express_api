import { Document } from "mongoose";

export interface ITweet extends Document {
  id?: string;
  avatar: string;
  name: string;
  username: string;
  image?: string;
  text?: string;
  followers: number;
  following: number;
  likes: number;
  retweets: number;
  comments: number;
}
