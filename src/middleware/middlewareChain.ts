import { Request, Response, NextFunction } from 'express';

// Created middlewares in the form of chain
export const firstMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('First middleware executed');
  next();
};

export const secondMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Second middleware executed');
  next();
};

export const thirdMiddleware = (req: Request, res: Response) => {
  console.log('Third middleware executed');
  res.send('All middleware executed successfully');
};
