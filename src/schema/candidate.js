const Joi = require('joi');

const postCandidate = Joi.object().keys({
  email: Joi.string().email().required(),
  first_name: Joi.string().optional(),
  middle_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone: Joi.string().optional(),
});

const putCandidate = Joi.object().keys({
  email: Joi.string().email().optional(),
  first_name: Joi.string().optional(),
  middle_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone: Joi.string().optional(),
  profile_pic: Joi.string().optional(),
});

module.exports = {
  postCandidate,
  putCandidate,
};
