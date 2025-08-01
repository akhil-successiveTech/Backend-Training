import { Request, Response, NextFunction } from "express";

// Checks that email and password exists or not
export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  next();
};