const express = require('express');
const router = express.Router();
const supplierRoute = require('./supplierRoute');
const itemRoute = require('./itemRoute');

router.get('/', function(req, res) {
	res.render('index.ejs');
});

router.use('/suppliers', supplierRoute);

router.use('/items', itemRoute);

module.exports = router;
