const express = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'ejs');

const PORT  = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('hello');
});

app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`);
});