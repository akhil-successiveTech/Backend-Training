import { NextFunction, Request, Response } from 'express';

// Interface for error
interface CustomError extends Error {
  statusCode?: number;
}
// Interface for middleware
interface Middleware{
  handler(err: CustomError, req: Request, res: Response,next:NextFunction): void;
}
// Class of middleware
class ErrorHandler implements Middleware{
  public handler(err: CustomError, req: Request, res: Response){
    // Display error
    console.error('Error:', err.message);
    // Set the responce in json format
    res.status(500).json({
      success:"false",
      message:"Error is occured in ErrorHandler"
       
    });
  }
}

export default new ErrorHandler();