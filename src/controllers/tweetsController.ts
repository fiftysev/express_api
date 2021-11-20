import {Request, Response} from "express";
import tweets from "../mocks/tweets.json";

type Tweet = {
  avatar: string,
  name: string,
  username: string,
  image?: string, 
  text?: string 
}

class tweetsController {
  public getById(req: Request, res: Response) {
    if (!req.params.id) {
      return res.status(400).json({"error": "Add id parameter!"});
    } 
    const tweetId: number = +req.params.id;
    const tweet = tweets.find(tweet => tweet.id === tweetId);
    if (tweet) {
      return res.status(200).json(tweet);
    }
    return res.status(404).json({"error": "Tweet not found"});
  }

  public getAllTweets(req: Request, res: Response) {
    if (tweets.length === 0) {
      return res.status(404).json({"error": "No tweets data."});
    }
    return res.status(200).json(tweets);
  }

  public createTweet(req: Request<{}, {}, Tweet>, res: Response) {
    if (req.body) {
      return res.status(200).json(req.body);
    }
    return res.status(400).json({"error": "Invalid tweet data!"});
  }
}

export default tweetsController;