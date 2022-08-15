const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const summary = require('./scripts/summary')
const account = require('./scripts/account')

app.set('view engine', 'ejs')

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/index.html"))
})


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/login.html"))
})

app.get('/file-upload', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/file_upload.html"))
})

// app.get('/account', (req, res) => {
//   res.sendFile(path.join(__dirname , "/pages/account.html"))
// })

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/confirmation.html"))
})

app.post('/account', (req,res) => {
  res.redirect('/account')
})

app.use('/account', account)

app.post('/summary', (req,res) => {
  res.redirect('/summary')
})

app.use('/summary', summary)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.set('views', path.join(__dirname, '/pages'));

app.use('/scripts', express.static(path.join(__dirname, '/scripts')))

app.use('/styles', express.static(path.join(__dirname, '/styles')))