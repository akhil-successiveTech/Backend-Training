import { Response , Request, NextFunction} from "express";
// Interface for LoggerMiddleware
interface Middleware{
  handler(req: Request, res: Response, next: NextFunction): void;
}
// Class of middleware
class LoggerMiddleware implements Middleware{
  public handler(req: Request, res: Response, next: NextFunction){
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`)
    next();
  }
}

export default new LoggerMiddleware();