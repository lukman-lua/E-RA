var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-RA' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'E-RA' });
});

router.get('/maps', function(req, res, next) {
  res.render('maps', {
    title: 'E-RA',
  });
});

module.exports = router;
