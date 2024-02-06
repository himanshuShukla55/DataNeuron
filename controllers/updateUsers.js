import { UserModel } from "../models/UserModel.js";
import { myLogger } from "../utils/cutomLogger.js";

export const updateUsers = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    myLogger.log("user updated!");
    res.status(201).json({ success: true, message: "user updated!" });
  } catch (error) {
    myLogger.error(error);
    next(error);
  }
};
