require("dotenv").config();

process.env.PGHOST
process.env.PGUSER
process.env.PGDATABASE
process.env.PGPASSWORD
process.env.PGPORT

const {Pool} = require('pg')

const pool = new Pool({
    ssl: { rejectUnauthorized: false }
})

pool.connect()

const getUsers = (request, response) => {
  pool.query('SELECT * FROM user_details ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
	getUsers
}