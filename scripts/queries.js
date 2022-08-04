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

const getUserById = (request, response) => {
  const id = 1 //sessionStorage.getItem('id')

  pool.query("SELECT * FROM user_details WHERE id = $1",[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function namefinder(){
  document.getElementById("namesummary").innerHTML = getUserById();
}

module.exports = {
	getUsers,
  getUserById
}