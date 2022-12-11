const express = require('express');
const { default: mongoose } = require('mongoose');
const User = require('./databaseModel');

const app = express();
const PORT = 3000;



app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
res.render('userLogin')
})




app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
