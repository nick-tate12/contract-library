import Joi from 'joi';
import { makeValidator } from '../utils/makeValidator';

const newUserSchema = Joi.object({
  name: Joi.string().uppercase().required(),

  email: Joi.string().email().lowercase().required(),

  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),

  password: Joi.string().min(5).required(),
});

const validateNewUserBody = makeValidator(newUserSchema, 'body');

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),

  password: Joi.string().required(),
});
const validateLoginBody = makeValidator(loginSchema, 'body');

export { validateNewUserBody, validateLoginBody };
