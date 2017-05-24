var express = require('express');
var router = express.Router();
var user = require('./user')

router.use('/user', user);

module.exports = router;
//익스포트 하겟다 저것을 