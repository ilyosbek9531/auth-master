const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  username: Joi.string().lowercase().required(),
  password: Joi.string().min(2).required(),
});

module.exports = {
  authSchema,
};
