var express = require('express');
var router = express.Router();
var album = require('../src/album');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/album',album);

module.exports = router;
