const { 
    homeBook,
    addBook, 
    addNewBook, 
    editBook,
    deleteBookId,
    editBookId,
} = require('../controller/book.controller')
const express = require('express');
const router = express.Router();

router.get('/',homeBook)
router.get('/addbook', addBook)
router.post('/addnewbook', addNewBook)
router.get('/editbook/:bookId', editBook)
router.put('/editbook/:bookId', editBookId)
router.delete('/deletebook/:bookId', deleteBookId)

module.exports = router