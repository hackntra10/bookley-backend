const express = require('express');
const bodyParser = require('body-parser')
const router = require('./routes/book.route')
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+ '/public'))
app.set('view engine','ejs');
app.set('views', './views/pages');
app.use('/', router)

const PORT = process.env.PORT || 4000

app.listen(PORT, (req,res)=> {
    console.log(`Server is running on port ${PORT}`)
})