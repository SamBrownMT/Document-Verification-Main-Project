const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/index.html"))
})

app.get('/summary', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/summary.html"))
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/scripts', express.static(path.join(__dirname, '/scripts')))

app.use('/styles', express.static(path.join(__dirname, '/styles')))