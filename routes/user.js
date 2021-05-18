const express = require('express');
const usercontroller = require('../controllers/user.controllers');
const router = express.Router();


//router.get('/', userscontroller.index);
router.post('/signup', usercontroller.signUp);
//router.get('/:id', userscontroller.show);
//router.patch('/:id', userscontroller.update);
//router.delete('/:id', userscontroller.destroy);





 




module.exports = router;