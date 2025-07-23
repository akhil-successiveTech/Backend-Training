import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'secret-key';

// Defined interface
export interface AuthRequest extends Request {
  user?: any;
}

// Authentication middleware
export default function auth(req: AuthRequest, res: Response, next: NextFunction) {
  // Access header 
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // Token not available
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  // console.log(token);
  // Verifies with the secret key
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token is invalid' });
    }
    req.user = user; 
    next(); 
  });
}