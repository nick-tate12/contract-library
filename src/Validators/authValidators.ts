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

const farmerSchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email().lowercase().required(),

  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const validateFarmerBody = makeValidator(farmerSchema, 'body');

const millSchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email().lowercase().required(),

  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const validateMillBody = makeValidator(millSchema, 'body');

const buyerSchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email().lowercase().required(),

  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const validateBuyerBody = makeValidator(buyerSchema, 'body');

const cropSchema = Joi.object({
  name: Joi.string().required(),

  price: Joi.number().min(0).required(),

  cropYield: Joi.number().min(0).required(),

  status: Joi.string().required(),
});

const validateCropBody = makeValidator(cropSchema, 'body');

export {
  validateNewUserBody,
  validateLoginBody,
  validateFarmerBody,
  validateMillBody,
  validateBuyerBody,
  validateCropBody,
};
