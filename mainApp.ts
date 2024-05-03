import { Application, Response, Request } from "express";
import todo from "./router/todoRouter";
export const mainApp = (app: Application) => {
  try {
    app.use("/", todo);
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Entry to my server is Successfull",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
