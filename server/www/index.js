var express = require('express');
var router = express.Router();
var wwwCtrl = require('./www.controller')

router.get('/', wwwCtrl.home);

// router.get('/', function (req, res) {
//  res.render('home/home.html');
// });

module.exports = router;
//익스포트 하겟다 저것을 