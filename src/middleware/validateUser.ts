import { Request, Response, NextFunction } from 'express';
import { registerSchema, loginSchema } from './validationRules';

export function validateUser(req: Request, res: Response, next: NextFunction) {
  let schema;
  // Different schema for different paths
  switch (req.path) {
    case '/api/register':
      schema = registerSchema;
      break;
    case '/api/login':
      schema = loginSchema;
      break;
    default:
      return next();
  }
  // If there is error
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}