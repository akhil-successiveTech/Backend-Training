import { Request, Response, NextFunction } from 'express';

interface Middleware{
  handler(req: Request, res: Response, next: NextFunction): void;
}

class FirstMiddleware implements Middleware{
  public handler(req: Request, res: Response, next: NextFunction){
    console.log('First middleware executed');
    next();
  }
}

class SecondMiddleware implements Middleware{
  public handler(req: Request, res: Response, next: NextFunction){
    console.log('Second middleware executed');
    next();
  }
}

class ThirdMiddleware implements Middleware{
  public handler(req: Request, res: Response, next: NextFunction){
    console.log('Third middleware executed');
    res.status(200).json({message: "Executed"});
    next();
  }
}

export const firstMiddleware = new FirstMiddleware();
export const secondMiddleware = new SecondMiddleware();
export const thirdMiddleware = new ThirdMiddleware();