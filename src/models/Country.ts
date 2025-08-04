import mongoose from "mongoose";
// Defines the structure for MongoDB document
const countrySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true , 
    unique: true,
    trim: true,
    minlength: [2, "Country name must be at least 2 characters long"],
   }
});
// Created a mongoose model to interact with the document
export const Country = mongoose.model("Country", countrySchema);