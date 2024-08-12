import Joi from "joi";

const user = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});

export = { user };