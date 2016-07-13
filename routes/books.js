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

module.exports = router;