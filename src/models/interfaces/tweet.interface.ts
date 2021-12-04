import { Document } from "mongoose";

export interface ITweet extends Document {
  id?: string;
  avatar: string;
  name: string;
  username: string;
  image?: string;
  text?: string;
  likes: number;
  retweets: number;
  comments: number;
}
