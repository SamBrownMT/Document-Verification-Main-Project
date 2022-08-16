const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const summary = require('./scripts/summary')
<<<<<<< HEAD
const db = require('./scripts/queries')
=======
const account = require('./scripts/account')
>>>>>>> accounts_working

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
  userEmailAddress = req.body['email-address']
  var cmd = {text: 'SELECT * from user_details WHERE emailaddress = $1',
		values: [userEmailAddress]
	};
  db.query(cmd, function(err, result, fields) {
		if (err) throw err;
    currentUser = result.rows[0]
	});

  res.redirect('/account')
})

<<<<<<< HEAD
app.get('/current-user', (req,res) => {
  res.json(currentUser)
})
=======
app.use('/account', account)
>>>>>>> accounts_working

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