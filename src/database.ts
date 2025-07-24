import mongoose from "mongoose";
import { config } from "./utils/config";
// Async function to connect with mongoDB document
export const connectDB = async () => {
  try {
    await mongoose.connect(config.url);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection failed", err);
    process.exit(1);
  }
};