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

function namefinder(){
  document.getElementById("namesummary").innerHTML = getUserById();
}

module.exports = {
	query: (text, params) => pool.query(text, params),
}