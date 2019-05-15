require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host     : process.env.PGHOST,
      database : process.env.PGDATABASE,
      user     :  process.env.PGUSER,
      password : process.env.PGPASSWORD
    },
    migrations: {
      // tableName: 'knex_migrations',
      // directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      // directory: `${ __dirname }/db/seeds`
    }
  },
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
}