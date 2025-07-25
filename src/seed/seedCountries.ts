import mongoose from "mongoose";
import { Country } from "../models/Country";
import { config } from "../utils/config";

const seedCountries = async () => {
  try {
    // Connect with mongoDB document
    await mongoose.connect(config.url);
    await Country.insertMany([
        { name: "Norway" },
        { name: "Hong Kong" },
        { name: "India" }
      ]);
      console.log("Countries seeded successfully.");
    }
    // Catches the error
  catch (error) {
    console.error("Seeding failed:", error);
  } 
};

export default seedCountries;
