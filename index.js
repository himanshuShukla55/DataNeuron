import express from "express";
import "dotenv/config";
import morgan from "morgan";
import fs from "fs";
import connection from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { myLogger } from "./utils/cutomLogger.js";
import { userRouter } from "./routes/users.js";

/* CONFIGURATION */
const app = express();

//setup for morgan.
const accessLogStream = fs.createWriteStream("./logs/access.log", {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

//port
const port = process.env.PORT || 8080;

//swagger setup
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Library",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It serves API endpoints to DataNeuron client app.",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Development server",
    },
    {
      url: "https://dataneuron-backend-1mvm.onrender.com",
      description: "Production server",
    },
  ],
};
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//middlewares
app.use(express.json());

//routes
app.use("/api/users", userRouter);

//error handler middleware
app.use(errorHandler);

app.listen(port, async () => {
  try {
    await connection(process.env.DBURL);
    myLogger.log("connected to database!");
    myLogger.log(`server is listening on port: ${port}`);
  } catch (error) {
    myLogger.error("error in connecting to database!");
  }
});
