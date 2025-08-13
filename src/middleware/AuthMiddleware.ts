import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../utils/config';
// Interface
export interface AuthRequest extends Request {
  user?: any;
}
// Middleware interface
interface Middleware {
  handler(req: AuthRequest, res: Response, next: NextFunction): void;
}
// Class of Auth Middleware
class AuthMiddleware implements Middleware{
  public handler(req: AuthRequest, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
    jwt.verify(token, config.secret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  }

  public withRole(role: string) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
      this.handler(req, res, () => {
        if (req.user?.role !== role) {
          return res.status(403).json({ message: 'Access denied: Admins only' });
        }
        next();
      });
    };
  }
}

export default new AuthMiddleware();