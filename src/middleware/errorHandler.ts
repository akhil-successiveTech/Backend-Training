import { Request, Response } from 'express';
// Created an interface for error that includes status code
interface CustomError extends Error {
  statusCode?: number;
}

const errorHandler = (err: CustomError,req: Request,res: Response): void => {
  // Console the error
  console.error('Error:', err.message);
  // Set the statusCode according to error else 500
  const statusCode = err.statusCode || 500;
  // Set the responce in the json format
  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode
    }
  });
};

export default errorHandler;