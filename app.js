require('dotenv').config()
console.log(process.env)
const express = require('express')
const db = require('./scripts/queries')
const app = express()
const port = 3000
const path = require("path")

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname , "/pages/index.html"))
// })

// app.get('/summary', (req, res) => {
//   res.sendFile(path.join(__dirname , "/pages/summary.html"))
// })

app.get('/users', db.getUsers)
app.get('/ibrahima', db.getUserById)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/scripts', express.static(path.join(__dirname, '/scripts')))

app.use('/styles', express.static(path.join(__dirname, '/styles')))

// started using template engines

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/summary', (req, res) => {
  res.render('summary', { name: db.getUserById(1)})
})