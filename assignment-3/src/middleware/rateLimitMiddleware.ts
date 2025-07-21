import { Request, Response, NextFunction } from "express";

// Created a counter
let count = 0;
let startTime = Date.now();
// Gets the value of limit and windowTime from user
export const basicLimiter = (limit: number, windowTime: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();

   if (now - startTime > windowTime) {
      count = 0;
      startTime = now;
    }
    // If counter is less than limit then increment
    if (count < limit) {
      count++;
      next(); 
      // Else return a message 
    } else {
      res.status(429).json({ message: "Two many requests." });
    }
  };
};