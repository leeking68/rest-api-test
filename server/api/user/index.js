var express = require('express');
var router = express.Router();
var userCtrl = require('./user.controller');

router.post('/:userId', userCtrl.create);
router.get('/list',userCtrl.getAll);
router.get('/:userId',userCtrl.get);
router.put('/:userId', userCtrl.update);
router.delete('/:userId', userCtrl.delete);

// router.get('/getUser/:username', userCtrl.get);
// router.get('/list', userCtrl.getAll);
// router.post('/addUser/:username', userCtrl.addUser);
// router.put('/updateUser/:username', userCtrl.updateUser);
// router.delete('/deleteUser/:username', userCtrl.deleteUser);

module.exports = router; 