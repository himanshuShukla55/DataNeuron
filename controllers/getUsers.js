import { UserModel } from "../models/UserModel.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ success: true, message: "users data", data: users });
  } catch (error) {
    myLogger.error(error);
    next(error);
  }
};
