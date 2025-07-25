import { Request, Response } from "express";
import { Country } from "../models/Country";

export const addCountry = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    // Check that the country exists in the data
    const existing = await Country.findOne({ name: new RegExp(`^${name}$`, "i") });
    if (existing) {
      return res.status(409).json({ success: false, message: "Country already exists" });
    }
    // Assign new country to the data
    const country = new Country({ name });
    await country.save();
    // Responce success
    res.status(201).json({ success: true, message: "Country added", data: country });
  } catch (error) {
    // Responce failure
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
