import Joi from 'joi';

// Interface for Register DTO
export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
}

// Interface for Login DTO
export interface LoginDTO {
  email: string;
  password: string;
}

// Class with static Joi schemas
export class UserValidator {
  // Made static because it can be directly used by class name
  static registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$'))
      .required()
      .messages({
        'string.pattern.base': 'Password must contain both letters and numbers.',
      }),
  });

  static loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
}