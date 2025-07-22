import Joi from 'joi';

// Schema to register user
export const registerSchema = Joi.object({
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
// Schema to login user
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
