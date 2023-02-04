const db = require('../models');
const Book = db.book;
const Op = db.Sequelize.Op;

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
            res.status(500).json({
                status: false,
                message: 'Judul belum dimasukan'
            })
            return;
      }

      if(!req.body.penulis) {
            res.status(500).json({
                status: false,
                message: 'Penulis belum dimasukan'
            })
            return;
      }

      if(!req.body.penerbit) {
            res.status(500).json({
                status: false,
                message: 'Penerbit belum dimasukan'
            })
            return;
      }

      if(!req.body.tahun) {
            res.status(500).json({
                status: false,
                message: 'Tahun belum dimasukan'
            })
            return;
      }

      if(!req.body.halaman) {
            res.status(500).json({
                status: false,
                message: 'Halaman belum dimasukan'
            })
            return;
      }

      if(!req.body.isbn) {
            res.status(500).json({
                status: false,
                message: 'No ISBN belum dimasukan'
            })
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
            res.status(200).json({
                  status: true,
                  message: "Buku berhasil ditambahkan",
                  data
            })
         })
         .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message ||'Buku gagal ditambahkan'
            })
         })
}

const getBook = (req, res) => {
      res.render('searchBook', {
            titleBar: 'searchBook'
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

const showBook = (req, res) => {
      res.render('showBook', {
            titleBar: 'showBook'
      })
}

const deleteBook = (req, res) => {
      res.render('deleteBook', {
            titleBar: 'deleteBook'
      })
}

const deleteBookId = (req, res) => {
      const id = req.params.bookId;

      Book.destroy({
            where: { id:id}
      })
      .then(num => {
            if(num == 1) {
                  res.send({
                        message: 'Buku Berhasil dihapus'
                  });
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
    getBook,
    getBookId,
    editBook,
    getEditBook,
    editBookId,
    showBook,
    deleteBook,
    deleteBookId
}