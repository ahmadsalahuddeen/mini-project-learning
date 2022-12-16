const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path')


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({urlencoded: true}))

const user = require('./controller/userController') 

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname , 'public')));





app.get('/signup', (req, res) => {
res.render('usersignup')
})

app.post('/signup', user.newUser)




app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
