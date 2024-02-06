import { Router } from "express";
import { addUsers, updateUsers, getUsers } from "../controllers/index.js";

const userRouter = Router();

userRouter.post("/", addUsers);
userRouter.patch("/:id", updateUsers);
userRouter.get("/", getUsers);

export { userRouter };
