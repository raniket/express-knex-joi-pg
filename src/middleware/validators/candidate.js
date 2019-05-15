const Joi = require('joi');
const {candidateSchema} = require('../../schema');

/**
 * Validates the user input for post request in candidate route.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const postCandidate = async (req, res, next) => {
  try {
    const {error, value} = Joi.validate(req.body, candidateSchema.postCandidate);
    if(error) throw error;
    next();
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

/**
 *
 * Validates the user input for put request in candidate route.
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const putCandidate = async (req, res, next) => {
  try {
    const {error, value} = Joi.validate(req.body, candidateSchema.putCandidate);
    if(error) throw error;
    next();
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

module.exports = {
  postCandidate,
  putCandidate,
};
