var express = require('express');
var path = require('path'); 
var router = express.Router();
var fs = require('fs');


    router.get('/list', function (req, res) {
       fs.readFile( path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
    });
    });

    module.exports = router;
