import { config } from "dotenv";
import { connect } from "mongoose";

config(); // Load environment variables from .env file

const URL = process.env.MONGODB_URL_ONLINE;

export const dbConfig = async () => {
  try {
    if (!URL) {
      throw new Error("MongoDB connection URL is not defined");
    }

    await connect(URL);
    console.log("Database connection established🔥❤️🔥");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
};
