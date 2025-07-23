import { Request, Response, NextFunction } from 'express';

export function validateNumericQuery(req: Request, res: Response, next: NextFunction) {
  const { page, limit } = req.query;
  
  // Page and limit check
  if(!page){
    return res.status(400).json({error: "Page is required!"})
  }
  if(!limit){
    return res.status(400).json({error: "Limit is required!"})
  }
  if (isNaN(Number(page))) {
    return res.status(400).json({ error: "'page' must be a number" });
  }
  // If limit is not a number
  if (isNaN(Number(limit))) {
    return res.status(400).json({ error: "'limit' must be a number" });
  }

  next();
}
