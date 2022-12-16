const User = require('../models/userModel');


const newUser = async (req,res) => {
try {
    
const user = new User({
    name:req.body.name,
    email: req.body.email,
    password: req.body.password
})
const result = await user.save();
res.send(`user created ${result}`)

} catch (error) {
    console.log(error.message); 
    
}
}

module.exports = {
    newUser
}