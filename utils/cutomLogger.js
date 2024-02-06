import { Console } from "console";
import fs from "fs";

// make a new logger
export const myLogger = new Console({
  stdout: fs.createWriteStream("./logs/normalLogs.log"),
  stderr: fs.createWriteStream("./logs/errorLogs.log"),
});
