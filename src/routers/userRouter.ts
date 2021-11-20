import {Router} from "express";
import UsersContoller from "../controllers/usersController";

const userRouter = Router();
const controller = new UsersContoller();

//получение по id
userRouter.get("/:id", controller.getById);
userRouter.get("/", controller.getAllUsers);

export default userRouter;