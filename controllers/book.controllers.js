const validator = require('fastest-validator');
const models = require('../models');

 function index(req, res) {
    models.book.findAll().then(result => {
          res.status(200).json(result);
    }).catch(error => {
           res.status(500).json({
               message: "something went wrong"
           });
    });
}


 
function save(req, res) {
    const book = {
        title: req.body.title,
        author: req.body.author,
        quantity: req.body.quantity,
        userId: 1
    }

        const schema = {
            title: {type:"string", optional: false, max: "100"},
            author: {type:"string", optional: false, max: "50"},
            quantity: {type: "number", optional: false}
        }
        const v = new validator();
        const validationResponse = v.validate(book, schema);
        if(validationResponse != true){
            return res.status(400).json({
                message: "validation failed",
                error: validationResponse
            });
        }

    models.book.create(book).then(result => {
        res.status(201).json({
            message: "book created successfully",
            book: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong",
            erroe: error
        });
    });
}




function show(req, res) {
    const id = req.params.id;

    models.book.findByPk(id).then(result => {
           res.status(200).json(result);
    }).catch(error => {
          res.status(500).json({
              message: "post not found"
          });
    })
}




function update(req, res) {
    const id = req.params.id;
    const updatedbook = {
        title: req.body.title,
        author: req.body.author,
        quantity: req.body.quantity
    }
    const userId = 1;

    const schema = {
        title: {type:"string", optional: false, max: "100"},
        author: {type:"string", optional: false, max: "50"},
        quantity: {type: "number", optional: false}
    }
    const v = new validator();
    const validationResponse = v.validate(updatedbook, schema);
    if(validationResponse != true){
        return res.status(400).json({
            message: "validation failed",
            error: validationResponse
        });
    }

    models.book.update(updatedbook, {where: {id:id, userId: userId}}).then(result => {
               res.status(200).json({
                   message: "book updated successfully",
                   book: updatedbook
               });
    }).catch(error => {
        res.status(500).json({
           message: "something went wrong",
           error: error
        });
    });
}




function destroy(req, res) {
    const id = req.params.id;
    const userId = 1;

    models.book.destroy({where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "book deleted successfully",
            book: result
        });
    }).catch(error => {
        res.status(500).json({
           message: "something went wrong",
           error: error
        });
    });
}

module.exports = {
    index: index,
    save: save,
    show: show,
    update: update,
    destroy: destroy
}