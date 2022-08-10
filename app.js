const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const summary = require('./summary')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/index.html"))
})

app.use('/summary', summary)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.set('views', path.join(__dirname, '/pages'));

app.use('/scripts', express.static(path.join(__dirname, '/scripts')))

app.use('/styles', express.static(path.join(__dirname, '/styles')))