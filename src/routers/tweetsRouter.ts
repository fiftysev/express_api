import {Router} from "express";
import tweetsController from "../controllers/tweetsController";

const tweetRouter = Router();
const controller = new tweetsController();

//get by id
tweetRouter.get("/:id", controller.getById);
// get all tweets
tweetRouter.get("/", controller.getAllTweets);

export default tweetRouter;