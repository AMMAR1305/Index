const mongoose = require('mongoose');

 const userSchema = mongoose.Schema({
    Name: 
    { 
        type : String,
    },
    
    Email: {
       type : String,
       required: true,
         unique: true,
    },  
    Password: {
       type : String,
       required: true,
    }  
})

module.exports = mongoose.model('User', userSchema);