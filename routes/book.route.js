const { 
    homeBook,
    addBook, 
    addNewBook,
    getBook,  
    showBook, 
    editBook,
    deleteBook,
    deleteBookId,
    getBookId
} = require('../controller/book.controller')
const express = require('express');
const router = express.Router();


router.get('/',homeBook)
router.get('/addbook', addBook)
router.post('/addnewbook', addNewBook)
router.get('/searchbook', getBook)
router.get('/searchbook/:bookId', getBookId)
router.get('/showbook', showBook)
router.get('/editbook', editBook)
router.put('/editbook/:bookId')
router.get('/deletebook', deleteBook)
router.delete('/deletebook/:bookId', deleteBookId)

module.exports = router