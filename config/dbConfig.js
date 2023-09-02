const dialect = process.env.DB_DIALECT
const host = process.env.DB_HOST
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME


module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect
  },
  test: {
    username,
    password,
    database,
    host,
    dialect
  },
  production: {
    username,
    password,
    database,
    host,
    dialect
  }
}