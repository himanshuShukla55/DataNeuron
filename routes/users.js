import { Router } from "express";
import { addUsers, updateUsers, getUsers } from "../controllers/index.js";

const userRouter = Router();

/**
 * @swagger
 * /api/users/:
 *   post:
 *     summary: Add a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: alex@gmail.com
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                  type: boolean
 *                  description: response sucess or failure
 *                  example: true,
 *                 message:
 *                  type: String
 *                  description: success of failure message
 *                  example: user added!,
 *       400:
 *         description: BAD REQUEST
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                  type: boolean
 *                  description: response sucess or failure
 *                  example: false,
 *                 message:
 *                  type: String
 *                  description: success of failure message
 *                  example: Email already used!,
 */
userRouter.post("/", addUsers);

/**
 * @swagger
 * /api/users:id:
 *   patch:
 *     summary: Edit a user.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         description: String ID of the user to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *                  description: The user's name.
 *                  example: Alex
 *     responses:
 *       202:
 *         description: ACCEPTED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                  type: boolean
 *                  description: response sucess or failure
 *                  example: true,
 *                 message:
 *                  type: String
 *                  description: success of failure message
 *                  example: user updated!,
 *       400:
 *         description: BAD REQUEST
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                  type: boolean
 *                  description: response sucess or failure
 *                  example: false,
 *                 message:
 *                  type: String
 *                  description: success of failure message
 *                  example: email already in  use!,
 */
userRouter.patch("/:id", updateUsers);

/**
 * @swagger
 * /api/users/:
 *   get:
 *     summary: Get Users.
 *     responses:
 *       200:
 *         description: ACCEPTED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                  type: boolean
 *                  description: response sucess or failure
 *                  example: true,
 *                 message:
 *                  type: String
 *                  description: success of failure message
 *                  example: users data,
 *                 data:
 *                   type: array
 *                   description : list of users
 *                   example : [{_id, name:, email: }]
 */
userRouter.get("/", getUsers);

export { userRouter };
