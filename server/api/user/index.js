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

router.get('/getUser/:username', function(req, res){
       fs.readFile( path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
            var users = JSON.parse(data);
            res.json(users[req.params.username]);
       });
    });

    /////addUser

        router.post('/addUser/:username', function(req, res){

        var result = {  };
        var username = req.params.username;

        // // CHECK REQ VALIDITY
        

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile( path.join(__dirname, '../../../data/user.json'),  function(err, data){
            
            // if(!req.body["password"] || !req.body["name"]){
        //     result["success"] = 0;
        //     result["error"] = "invalid request";
        //     res.json(result);
        //     return;
        // }

            var users = JSON.parse(data);
            if(users[username]){
                // DUPLICATION FOUND
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }

            // ADD TO DATA
            users[username] = req.body;

            // SAVE DATA
            fs.writeFile( path.join(__dirname, '../../../data/user.json'),
                         JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result = {"success": 1};
                res.json(result);
            })
        })
    });

      router.delete('/deleteUser/:username', function(req, res){
        var result = { };
        //LOAD DATA
        fs.readFile( path.join(__dirname, '../../../data/user.json'), "utf8", function(err, data){
            var users = JSON.parse(data);

            // IF NOT FOUND
            if(!users[req.params.username]){
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            delete users[req.params.username];
            fs.writeFile( path.join(__dirname, '../../../data/user.json'),
                         JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result["success"] = 1;
                res.json(result);
                return;
            })
        })

    })

    module.exports = router;
