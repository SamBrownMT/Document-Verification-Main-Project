const express = require('express')
const router = express.Router()
const db = require('./queries')

router.get('/', (req, res) => {
	var cmd = {text: 'SELECT * from user_details WHERE id = $1',
		values: ['1'] //change to cookie/sessionStorage
	};
	db.query(cmd, function(err, result, fields) {
		if (err) throw err;
		var r = result.rows[0]
		var full_address = [r.addressline1, r.addressline2, r.addressline3].filter(x => x).join('<br>')
		res.render('summary',{
			name: r.name,
			dateofbirth: r.dateofbirth,
			address: full_address,
			phonenumber: r.phonenumber,
			emailaddress: r.emailaddress,
			filename1: r.filename1

		});
	})
})

module.exports = router