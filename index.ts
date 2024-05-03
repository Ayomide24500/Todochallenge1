import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.port;

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
mainApp(app);
const server = app.listen(port, async () => {
  console.clear();
  console.log("connected 👌👍");
  await dbConfig();
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
