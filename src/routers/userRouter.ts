import {Router} from "express";
import usersContoller from "../controllers/usersController";

const userRouter = Router();
const controller = new usersContoller();

//получение по id
userRouter.get("/:id", controller.getById);
userRouter.get("/", controller.getAllUsers);

export default userRouter;