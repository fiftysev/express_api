import { ITweet } from "./interfaces/tweet.interface";
import { Schema, model } from "mongoose";

const TweetSchema = new Schema({
  avatar: { type: String, default: "" },
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, default: null },
  text: { type: String, default: null },
  likes: { type: Number, default: 0, required: true },
  retweets: { type: Number, default: 0, required: true },
  comments: { type: Number, default: 0, required: true },
});

export default model<ITweet>("Tweet", TweetSchema);
