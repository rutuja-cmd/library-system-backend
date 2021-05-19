const express = require('express');
const usersController = require('../controllers/user.controllers');
const router = express.Router();


router.get('/', usersController.index);
// router.post('/signup', usersController.signUp);
//router.get('/:id', usersController.show);
//router.patch('/:id', usersController.update);
//router.delete('/:id', usersController.destroy);

module.exports = router;