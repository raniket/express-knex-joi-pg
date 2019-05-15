const { Model } = require('../helpers/model');

const name = 'Candidate';
const tableName = 'candidate';

const selectableProps = [
  'firstName',
  'lastName',
  'phone',
  'email',
];

module.exports = knex => {
  const candidate = new Model(knex, name, tableName, selectableProps);
  return candidate;
};
