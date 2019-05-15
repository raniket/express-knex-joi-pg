const knex = require('../config/database');
const Candidate = require('./candidate')(knex);

module.exports = {
  Candidate,
};
