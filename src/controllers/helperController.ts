import {Request, Response} from "express";
import actualData from "../mocks/actualThemes.json";
import tweets from "../mocks/tweets.json";


class HelperController {
  public getActualTags(req: Request, res: Response) {
    if (actualData.length > 0) {
      return res.status(200).json(actualData);
    }
    return res.status(404).json({"error": "Actual data is not found"});
  }

  public searchTweet(req: Request, res: Response) {
    if (req.query.searchReq !== undefined && tweets.length > 0) {
      const pattern = req.query.searchReq as string;
      const tweetsList = tweets.filter(tweet => tweet.text?.includes(pattern));
      return res.status(200).json(tweetsList);
    }
    return res.status(400).json({"error": "Search request is empty"})
  }
}

export default HelperController;