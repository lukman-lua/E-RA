var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'E-RA' });
});

router.post('/maps', function(req, res, next) {
  if (
      req.body.username == "era-unand" &
      req.body.password == "EraUnand2022*"
  ){
    res.render('maps', {
      title: 'E-RA',
    });
  }else{
    res.redirect('/');
  }
});

module.exports = router;
