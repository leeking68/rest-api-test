var path = require('path');
var fs = require('fs');
// var Userdb = require('mongoose').model('User'); 
var Userdb = require('../../../models/user');

exports.create = function (req, res) {
     var user = new Userdb();
     user.info = req.body.info;
     user.userId = req.params.userId;

     user.save(function(err) {
         if(err) {
             console.error(err);
             res.json({success: 0});
             return;
         }
         res.json({success: 1});
     });
};

exports.getAll = function (req, res) {
    Userdb.find(function(err, user) {
        if(err) {
            return res.status(500).send({error: 'database failure'})
        }
        res.json(user);
    });
};

exports.get = function (req, res) {
    Userdb.findOne({userId: req.params.userId}, function(err, user) {
        if(err) return res.status(500).json({error: err});
        if(!user) return res.status(400).json({error: 'user not found'});
        res.json(user);
    });
};

exports.update  = function( req, res) {

    Userdb.update({userId: req.params.userId},{$set: req.body}, function(err, user) {
        if (err) {
            return res.status(500).json({error: err});
        }


        res.json({success: 1});
        
        

    })
};

exports.delete = function( req, res ) {
    
    Userdb.remove({userId: req.params.userId}, function(err, output)
    { 
        if (err) {
            return res.status(500).json({error: err});
        }

        res.json({success: 1});
    })

};

// exports.get = function (req, res) {
//       fs.readFile(path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
//         var users = JSON.parse(data);
//         res.json(users[req.params.username]);
//     });   
// };

// exports.getAll = function (req, res) {
//       fs.readFile(path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
//         res.end(data);
//     });
// }

// exports.addUser = function (req, res) {
//     var result = {};
//     var username = req.params.username;
//     // CHECK REQ VALIDITY
//     if (!req.body["password"] || !req.body["name"]) {
//         result["success"] = 0;
//         result["error"] = "invalid request";
//         res.json(result);
//         return;
//     }
//     // LOAD DATA & CHECK DUPLICATION
//     fs.readFile(path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
//         var users = JSON.parse(data);
//         if (users[username]) {
//             // DUPLICATION FOUND
//             result["success"] = 0;
//             result["error"] = "duplicate";
//             res.json(result);
//             return;
//         }
//         // ADD TO DATA
//         users[username] = req.body;
//         // SAVE DATA
//         fs.writeFile(path.join(__dirname, '../../../data/user.json'), JSON.stringify(users, null, '\t'), "utf8", function (err, data) {
//             result = {"success": 1};
//             res.json(result);
//         });
//     });
// };


// //update
// exports.updateUser = function (req, res) {
//     var result = {};
//     var username = req.params.username;

//     // // CHECK REQ VALIDITY
//     if (!req.body["password"] || !req.body["name"]) {
//         result["success"] = 0;
//         result["error"] = "invalid request";
//         res.json(result);
//         return;
//     }
//     // LOAD DATA & CHECK DUPLICATION
//     fs.readFile(path.join(__dirname, '../../../data/user.json'), function (err, data) {
//         var users = JSON.parse(data);
      
//         // ADD TO DATA
//         users[username] = req.body;

//         console.log(req.body);
//         // SAVE DATA
//         fs.writeFile(path.join(__dirname, '../../../data/user.json'),
//             JSON.stringify(users, null, '\t'), "utf8", function (err, data) {
//                 result = {
//                     "success": 1
//                 };
//                 res.json(result);
//             });
            
//     });
// }


// exports.deleteUser = function (req, res) {
//     var result = {};
//     //LOAD DATA
//     fs.readFile(path.join(__dirname, '../../../data/user.json'), "utf8", function (err, data) {
//         var users = JSON.parse(data);

//         // IF NOT FOUND
//         if (!users[req.params.username]) {
//             result["success"] = 0;
//             result["error"] = "not found";
//             res.json(result);
//             return;
//         }

//         delete users[req.params.username];
//         fs.writeFile(path.join(__dirname, '../../../data/user.json'),
//             JSON.stringify(users, null, '\t'), "utf8", function (err, data) {
//                 result["success"] = 1;
//                 res.json(result);
//                 return;
//         });
//     });
// }