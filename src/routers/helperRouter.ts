import {Router} from "express";
import HelperController from "../controllers/helperController";

const helperRouter = Router({mergeParams: true});
const controller = new HelperController(); 

helperRouter.get("/actual", controller.getActualTags);
helperRouter.get("/search", controller.searchTweet);

export default helperRouter;