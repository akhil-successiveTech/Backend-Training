import { Request, Response, NextFunction } from 'express';

interface Middleware{
  handler(req: Request, res: Response, next: NextFunction): void;
}

class ValidationNumericQuery implements Middleware{
  public handler(req: Request, res: Response, next: NextFunction){

    const {page, limit} = req.query;

    if(!page){
      return res.status(400).json({error: "Page is required!"})
    }
    if(!limit){
      return res.status(400).json({error: "Limit is required!"})
    }
    if (isNaN(Number(page))) {
      return res.status(400).json({ error: "Page must be a number" });
    }
    if (isNaN(Number(limit))) {
      return res.status(400).json({ error: "Limit must be a number" });
    }
    next();
  }
}

export default new ValidationNumericQuery();