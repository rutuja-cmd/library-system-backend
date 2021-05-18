const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// function index(req, res) {
//     models.user.findAll().then(result => {
//           res.status(200).json(result);
//     }).catch(error => {
//            res.status(500).json({
//                message: "something went wrong"
//            });
//     });
// }

function signUp(req, res) {
    bcryptjs.genSalt(10, function(err, salt){
        bcryptjs.hash(req.body.password, salt, function(err, hash){
            const user = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                type: req.body.type,
                gender: req.body.gender
            }

               models.user.create(user).then(result => {
                res.status(201).json({
                    message: "user created successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "something went wrong"
                });
            });
        });   
    });
}






module.exports = {
    //index: index,
    signUp: signUp
   // show: show,
   // update: update,
    //destroy: destroy
}