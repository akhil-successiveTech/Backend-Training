import { Request, Response, NextFunction } from 'express';

const customHeaderMiddleware = (headerName: string, headerValue: string) => {
  // Returns a middleware
  return (req: Request, res: Response, next: NextFunction): void => {
    // Sets the header key value
    res.setHeader(headerName, headerValue);
    next();
  };
};

export default customHeaderMiddleware;