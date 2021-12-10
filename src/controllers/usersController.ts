import { Request, Response } from "express";
import userModel from "../models/user.model";

class UsersContoller {
  async getById(req: Request, res: Response) {
    if (!req.params.id) {
      return res.status(400).json({ error: "Add id parameter!" });
    }
    const userId: number = +req.params.id;
    const user = await userModel.findOne({ id: userId });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: "User not found" });
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await userModel.find();
    if (users.length === 0) {
      return res.status(404).json({ error: "No users data." });
    }
    return res.status(200).json(users);
  }
}

export default UsersContoller;
