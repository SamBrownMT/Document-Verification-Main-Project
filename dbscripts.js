require("dotenv").config();

process.env.PGHOST
process.env.PGUSER
process.env.PGDATABASE
process.env.PGPASSWORD
process.env.PGPORT

const {Client} = require('pg')

const client = new Client({
    ssl: { rejectUnauthorized: false }
})

client.connect()
