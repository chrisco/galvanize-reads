var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
	knex('book').select()
		.then(function(books) {
			res.render(
				"books", {
					books: books
				}
			);
		});
});

router.get('/new', function(req, res, next) {
	res.render('new-book');
});

router.post('/new', function(req, res, next) {
	knex('book').insert(req.body)
		.then(function() {
			res.redirect('/books');
		});
});

module.exports = router;
