import {Request, Response} from "express";
import users from "../mocks/users.json";

class UsersContoller {
  public getById(req: Request, res: Response) {
    if (!req.params.id) {
      return res.status(400).json({"error": "Add id parameter!"});
    } 
    const userId: number = +req.params.id;
    const user = users.find(user => user.id === userId);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({"error": "User not found"});
  }

  public getAllUsers(req: Request, res: Response) {
    if (users.length === 0) {
      return res.status(404).json({"error": "No users data."});
    }
    return res.status(200).json(users);
  }
}

export default UsersContoller;