import mongoose from "mongoose";
// Defines the structure for MongoDB document
const countrySchema = new mongoose.Schema({
  name: { type: String, required: true , unique: true }
});
// Created a mongoose model to interact with the document
export const Country = mongoose.model("Country", countrySchema);