import { Response , Request, NextFunction} from "express";

// Created a logger
export const loggerMiddleware = (req : Request, res:Response, next:NextFunction) => {
  // Converting to ISO string format
  const timestamp = new Date().toISOString();
  // Console the log
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next(); 
};