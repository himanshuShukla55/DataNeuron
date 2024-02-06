import { Schema, model } from "mongoose";

export const UserModel = model(
  "user",
  new Schema({
    name: {
      type: String,
      minLength: [2, "Name length should be 2-15! characters!"],
      maxLength: [15, "Name length should be 2-15 characters!"],
      trim: true,
      required: true,
    },
    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid Email!",
      ],
      unique: true,
      required: true,
    },
  })
);
