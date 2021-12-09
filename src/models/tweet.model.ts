import { ITweet } from "./interfaces/tweet.interface";
import { Schema, model } from "mongoose";

const TweetSchema = new Schema({
  id: { type: Number, required: true },
  avatar: { type: String, default: "" },
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, default: null },
  text: { type: String, default: null },
  likes: { type: Number, default: 0, required: true },
  retweets: { type: Number, default: 0, required: true },
  comments: { type: Number, default: 0, required: true },
  isLiked: { type: Boolean, default: false },
});

export default model<ITweet>("Tweet", TweetSchema);
