import { Request, Response, NextFunction } from 'express';

export function validateNumericQuery(req: Request, res: Response, next: NextFunction) {
  const { page, limit } = req.query;
  // If page is not a number 
  if (page && isNaN(Number(page))) {
    return res.status(400).json({ error: "'page' must be a number" });
  }
  // If limit is not a number
  if (limit && isNaN(Number(limit))) {
    return res.status(400).json({ error: "'limit' must be a number" });
  }

  next();
}
