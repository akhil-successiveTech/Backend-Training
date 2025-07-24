import { Request, Response, NextFunction } from "express";

interface Middleware {
  handler(req: Request, res: Response, next: NextFunction): void;
}

class RateLimitMiddleware implements Middleware {
  // Data members
  private count = 0;
  private startTime = Date.now();
  private limit: number;
  private windowTime: number;

  // Assign values given by user
  constructor(limit: number, windowTime: number) {
    this.limit = limit;
    this.windowTime = windowTime;
  }

  public handler = (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();
    if (now - this.startTime > this.windowTime) {
      this.count = 0;
      this.startTime = now;
    }
    // If counter is less than limit then increment
    if (this.count < this.limit) {
      this.count++;
      next();
      // Else return a message
    } else {
      res.status(429).json({ message: "Too many requests." });
    }
  }
}

export default RateLimitMiddleware;