import { Request, Response } from "express";
import tweetModel from "../models/tweet.model";

type Tweet = {
  avatar: string;
  name: string;
  username: string;
  image?: string;
  text?: string;
};

class TweetsController {
  async getById(req: Request, res: Response) {
    if (!req.params.id) {
      return res.status(400).json({ error: "Add id parameter!" });
    }
    const tweetId: string = req.params.id;
    const tweet = await tweetModel.findById(tweetId);
    if (tweet) {
      return res.status(200).json(tweet);
    }
    return res.status(404).json({ error: "Tweet not found" });
  }

  async getAllTweets(req: Request, res: Response) {
    const tweets = await tweetModel.find();
    if (tweets.length === 0) {
      return res.status(404).json({ error: "No tweets data." });
    }
    return res.status(200).json(tweets);
  }

  async createTweet(req: Request<{}, {}, Tweet>, res: Response) {
    if (req.body as Tweet) {
      const { avatar, name, username, image, text } = req.body;
      const tweet = new tweetModel({ avatar, name, username, image, text });
      await tweet.save();
      return res.status(200).json(tweet);
    }
    return res.status(400).json({ error: "Invalid tweet data!" });
  }
}

export default TweetsController;
