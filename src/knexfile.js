const { DB_HOST, DB_USER, DB_PASS } = process.env

module.exports = {
  client: 'mysql',
  connection: {
    database: DB_HOST,
    user: DB_USER,
    password: DB_PASS
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
