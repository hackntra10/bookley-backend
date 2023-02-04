const alert = require('../node_modules/node-popup');
const db = require('../models');
const Book = db.book;

const homeBook = (req, res) => {
      Book.findAll()
       .then(data => {
            res.render('index', {
                  titleBar: 'home', 
                  bookData : data
            })
       })
       .catch(err=> {
            res.status(500).send({
                  message: err.message || "Telah terjadi error"
            })
       })

}

const addBook = (req, res) => {     
      res.render('addBook', {
            titleBar: 'addBook'
      })      
}

const addNewBook = async(req, res) => {
     
      if (!req.body.judul) {
            res.redirect('/addbook')
            return;
      }

      if(!req.body.penulis) {
            res.redirect('/addbook')
            return;
      }

      if(!req.body.penerbit) {
            res.redirect('/addbook')
            return;
      }

      if(!req.body.tahun) {
            res.redirect('/addbook')
            return;
      }

      if(!req.body.halaman) {
            res.redirect('/addbook')
            return;
      }

      if(!req.body.isbn) {
            res.redirect('/addbook')
            return;
      }
  
      const tambahBuku = {
            judul : await req.body.judul,
            penulis : await req.body.penulis,
            penerbit : await req.body.penerbit,
            tahun: await req.body.tahun,
            halaman: await req.body.halaman,
            isbn: await req.body.isbn
      }

      Book.create(tambahBuku)
         .then(data=> {
            res.redirect('/')
         })
         .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message ||'Buku gagal ditambahkan'
            })
         })
}

const getBookId = (req, res) => {
      const id = req.params.bookId;

      Book.findByPk(id)
      .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: 'Cannot find Book'
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Tutorial with id" || err
            });
          });
}

const editBook = (req, res) => {
      const id = req.params.bookId;

      Book.findByPk(id)
        .then(data => {
            if (data) {
              res.render('editBook',{
                  titleBar: 'editBook', 
                  id : data.id,
                  judul : data.judul,
                  penulis: data.penulis,
                  penerbit: data.penerbit,
                  tahun: data.tahun,
                  halaman: data.halaman,
                  isbn: data.isbn
            })
            } else {
              res.status(404).send({
                message: 'Cannot find Book'
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Tutorial with id" || err
            });
          });
}

const getEditBook = (req,res) => {
      const id = req.params.bookId;

      Book.findByPk(id)
      .then(data => {
        if (data) {
          res.redirect(`/editbook/${id}`,{
            books : data
          });
        } else {
          res.status(404).send({
            message: `Cannot find Book with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving book with id=" + id
        });
      });
}

const editBookId = (req, res) => {
      const id = req.params.bookId;

      Book.update(req.body, {
            where: {id:id}
      })
       .then(num=> {
            if(num==1){
                  res.redirect(`/editbook/${id}`)
            } else {
                  res.send({
                        message: `Cannot update Book with id=${id}. Maybe Tutorial was not found or req.body is empty`
                    })
            }
       })
       .catch(err => {
            res.status(500).send({
                message: "Error updating Book " || err
            })
          })
}

const deleteBookId = (req, res) => {
      const id = req.params.bookId;

      Book.destroy({
            where: { id:id}
      })
      .then(num => {
            if(num == 1) {
                  res.redirect('/')
            } else {
                  res.send({
                        message: 'Buku tidak dapat dihapus'
                  })
            }
      })
      .catch(err => {
            res.status(500).send({
                  message :'Tidak dapat dihapus' || err
            })
      })
}

module.exports = {
    homeBook,
    addBook,
    addNewBook,
    getBookId,
    editBook,
    getEditBook,
    editBookId,
    deleteBookId
}