require("dotenv").config();

process.env.PGHOST
process.env.PGUSER
process.env.PGDATABASE
process.env.PGPASSWORD
process.env.PGPORT

const {Pool} = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

pool.connect()

const getUserById = (request, response) => {
  const id = 1 //this will change to cookie/sessionStorage

  pool.query('SELECT * FROM user_details WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.send(results.rows)
  })
}

module.exports = {
	query: (text, params) => pool.query(text, params),
  getUserById
}