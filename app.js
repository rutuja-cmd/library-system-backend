const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const morgan = require('morgan');
const db = require('./config/db');
const bodyParser = require('body-parser')
const app = express();

const userRoutes = require('./routes/user.js');
const bookRoutes = require('./routes/book.js');

//load config
dotenv.config({path: './config/config.env'});

app.set('view engine', 'ejs');

db.connect();


const PORT  = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`);
});