import { Request, Response, NextFunction } from "express";
import { UserValidator } from "./ValidationRules";
// Interface
interface Middleware {
  handler(req: Request, res: Response, next: NextFunction): void;
}
// Class for user validation
class ValidationUser implements Middleware {
  public handler = (req: Request, res: Response, next: NextFunction) => {
    let schema;
    // Switch case to register and login user
    switch (req.path) {
      case "/api/register":
        schema = UserValidator.registerSchema;
        break;
      case "/api/login":
        schema = UserValidator.loginSchema;
        break;
      default:
        return next();
    }
    // Display the error if the validation fails
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  }
}

export default new ValidationUser();