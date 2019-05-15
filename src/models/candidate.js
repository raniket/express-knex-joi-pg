const { Model } = require('../helpers/model');

const name = 'Candidate';
const tableName = 'candidate';

const selectableProps = [
  'id',
  'email',
  'first_name',
  'middle_name',
  'last_name',
  'phone',
  'assigned_to',
  'external_id',
  'organization_id',
  // 'isRegistered',
  'cf',
  'profile_pic',
  'status_id',
  'icard',
  'created_at',
  'updated_at'
];

module.exports = knex => {
  const candidate = new Model(knex, name, tableName, selectableProps);
  return candidate;
};
