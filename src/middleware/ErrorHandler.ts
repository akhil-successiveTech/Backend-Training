import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
// Interface for error
interface CustomError extends Error {
  statusCode?: number;
}
// Interface for middleware
interface Middleware{
  handler(err: CustomError, req: Request, res: Response): void;
}
// Class of middleware
class ErrorHandler implements Middleware{
  public handler(err: CustomError, req: Request, res: Response){
    // Display error
    console.error('Error:', err.message);
    // Set statuscode
    const statusCode = err.statusCode || 500;
    // Set the responce in json format
    res.status(statusCode).json({
        error: {
          message: err.message || 'Internal Server Error',
          status: statusCode
        }
    });
  }
}

export default new ErrorHandler();