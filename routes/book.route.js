const { 
    homeBook,
    addBook, 
    addNewBook,
    getBook,  
    showBook, 
    editBook,
    deleteBook,
    deleteBookId,
    getBookId,
    editBookId,
    getEditBook
} = require('../controller/book.controller')
const express = require('express');
const router = express.Router();

router.get('/',homeBook)
router.get('/addbook', addBook)
router.post('/addnewbook', addNewBook)
router.get('/searchbook', getBook)
router.get('/searchbook/:bookId', getBookId)
router.get('/showbook', showBook)
router.get('/editbook/:bookId', editBook)
//router.get('/editbook/:bookId', getEditBook)
router.put('/editbook/:bookId', editBookId)
router.get('/deletebook', deleteBook)
router.delete('/deletebook/:bookId', deleteBookId)

module.exports = router