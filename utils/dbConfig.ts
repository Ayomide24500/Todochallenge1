import env from "dotenv";
import { connect } from "mongoose";
env.config();

// const URL: string = "mongodb://localhost:27017/simpleTodo";

export const dbConfig = async () => {
  try {
    await connect(
      `mongodb+srv://ayomideadisa83:Ayomide123@cluster0.mgleepp.mongodb.net/todochallenge?retryWrites=true&w=majority&appName=Cluster0`
    ).then(() => {
      console.log("Database connection established🔥❤️🔥");
    });
    console.log(connect);
  } catch (error) {
    console.log("Error connecting to database:", error);
    throw error;
  }
};
