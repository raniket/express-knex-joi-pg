const { Candidate } = require('../models');

/**
 * Create candidate controller.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const postCandidate = async (req, res, next) => {
  try {
    const payload = req.body;
    const candidate = await Candidate.create(payload);
    res.status(201).json(candidate);
  } catch (error) {
    console.log('error: ', error)
    next(error);
  }
};

/**
 * Get candidate controller, response will be based on the query string parameter.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCandidates = async (req, res, next) => { // needs improvements for different kinds of query params.
  try {
    const candidates = await Candidate.findAll();
    res.json(candidates);
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

/**
 * Get a candidade controller.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCandidate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const candidate = await Candidate.findById(id);
    res.status(200).json(candidate);
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

/**
 * Update a candidate controller.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const putCandidate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const candidate = await Candidate.update(id, payload);
    res.status(200).json(candidate);
  } catch (error) {
    console.log('errro: ', error);
    next(error);
  }
};

/**
 * Delete a candidate controller.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteCandidate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const candidate = await Candidate.destroy(id);
    res.status(204).json(candidate);
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

module.exports = {
  postCandidate,
  getCandidates,
  getCandidate,
  putCandidate,
  deleteCandidate,
}
