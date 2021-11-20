import {Router} from "express";
import TweetsController from "../controllers/tweetsController";

const tweetRouter = Router();
const controller = new TweetsController();

//get by id
tweetRouter.get("/:id", controller.getById);
// get all tweets
tweetRouter.get("/", controller.getAllTweets);
// create tweet
tweetRouter.post("/create", controller.createTweet);

export default tweetRouter;