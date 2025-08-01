import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    // Find the email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    // Compares the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });
    if(role === 'admin'){
      res.status(200).json({message: "Admin login successful"})
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const signupUser = async (req: Request, res: Response) => {
  const { email, password, role} = req.body;

  try {
    // Find the user data
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    // Find the password data
    const hashedPassword = await bcrypt.hash(password, 10);
    // Creates a new user
    const newUser = new User({ email, password: hashedPassword, role: role || 'user'});
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};