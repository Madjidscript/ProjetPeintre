const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
nom:{type:'string',required:true},
email:{type:'string',required:true},
password:{type:'string',required:true},
fonction:{type:'string',required:true},
image:{type:'string',required:false}

})
const User = mongoose.model('User',Schyma)
module.exports=User