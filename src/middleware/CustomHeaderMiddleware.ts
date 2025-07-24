import { Request, Response, NextFunction } from 'express';

class CustomHeaderMiddleware{
  // Create data members
  private headerName: string;
  private headerValue: string;

  // Constructor to assign the passed values
  constructor(headerName: string, headerValue: string){
    this.headerName = headerName;
    this.headerValue = headerValue;
  }
  // Function to set the header in responce
  public handler = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(this.headerName, this.headerValue);
    next();
  };
}

export default CustomHeaderMiddleware;