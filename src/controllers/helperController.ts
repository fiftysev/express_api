import { Request, Response } from "express";
import actualThemeModel from "../models/actualTheme.model";
import tweetModel from "../models/tweet.model";

class HelperController {
  async getActualTags(req: Request, res: Response) {
    const actualData = await actualThemeModel.find();
    if (actualData.length > 0) {
      return res.status(200).json(actualData);
    }
    return res.status(404).json({ error: "Actual data is not found" });
  }

  async searchTweet(req: Request, res: Response) {
    const tweets = await tweetModel.find();
    if (req.query.searchReq !== undefined && tweets.length > 0) {
      const pattern = req.query.searchReq as string;
      const searchResult = tweets.filter((tweet) =>
        tweet.text?.includes(pattern)
      );
      return res.status(200).json(searchResult);
    }
    return res.status(400).json({ error: "Search request is empty" });
  }
}

export default HelperController;
