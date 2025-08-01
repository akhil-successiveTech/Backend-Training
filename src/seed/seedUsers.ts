import mongoose from "mongoose";
import { User } from "../models/User";
import { config } from "../utils/config";
import bcrypt from "bcrypt";

const seedUsers = async () => {
  try {
    // Connect with mongoDB document
    await mongoose.connect(config.url);
    const hashedPassword = await bcrypt.hash("test1234", 10);
    await User.insertMany([
      {
        email: "test1@example.com",
        password: hashedPassword,
        role: "admin"
      }
    ]);
    console.log("User seeded successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

export default seedUsers;