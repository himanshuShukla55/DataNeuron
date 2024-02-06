import { UserModel } from "../models/UserModel.js";
import { myLogger } from "../utils/cutomLogger.js";

export const addUsers = async (req, res, next) => {
  try {
    await UserModel.create(req.body);
    myLogger.log("user added!");
    res.status(201).json({ success: true, message: "user added" });
  } catch (error) {
    myLogger.error(error);
    next(error);
  }
};
