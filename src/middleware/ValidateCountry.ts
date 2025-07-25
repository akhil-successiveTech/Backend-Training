import { Request, Response, NextFunction } from "express";

export const validateCountry = (req: Request, res: Response, next: NextFunction) => {
  // Gets the name from the body
  const { name } = req.body;
  // console.log(name);
  // Checks the valid name is there or not
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Invalid country name. It must be a string with at least 2 characters.",
    });
  }
  next();
};