const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().min(1).max(50).required().messages({}),
  lastName: Joi.string(),
  username: Joi.string().alphanum().min(1).max(50).required().messages({}),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "one"] },
    })
    .required()
    .messages({}),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"))
    .messages({}),
});

module.exports = schema;
