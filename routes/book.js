const express = require('express');
const bookscontroller = require('../controllers/book.controllers');
const router = express.Router();


router.get('/', bookscontroller.index);
router.post('/', bookscontroller.save);
router.get('/:id', bookscontroller.show);
router.patch('/:id', bookscontroller.update);
router.delete('/:id', bookscontroller.destroy);


module.exports = router;