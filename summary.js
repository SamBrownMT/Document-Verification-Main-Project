const express = require('express')
const router = express.Router()
const db = require('./scripts/queries')

router.get('/', (req, res) => {
	var cmd = {text: 'SELECT * from user_details WHERE id = $1',
		values: ['1'] //change to cookie/sessionStorage
	};
	db.query(cmd, function(err, result, fields) {
		if (err) throw err;
		res.render('summary',{name: result.rows[0].name});
	})
})

module.exports = router