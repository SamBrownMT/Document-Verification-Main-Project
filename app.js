const express = require('express')
const db = require('./scripts/queries')
const app = express()
const port = 3000
const path = require("path")

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , "/pages/index.html"))
})

app.get('/summary', (req, res) => {
  var cmd = 'SELECT * from user_details WHERE id = 1';
  db.query(cmd, function(err, result, fields) {
    if (err) throw err;
    res.render('summary',{result: result.rows[0].name});
  })
  //res.sendFile(path.join(__dirname , "/pages/summary.html"))
})

// app.get('/users', db.getUsers)
// app.get('/ibrahima', db.getUserById)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.set('views', path.join(__dirname, '/pages'));

app.use('/scripts', express.static(path.join(__dirname, '/scripts')))

app.use('/styles', express.static(path.join(__dirname, '/styles')))