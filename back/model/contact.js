const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
prenom:{type:'String',required:true},
nom:{type:'String',required:true},
email:{type:'String',required:true},
objet:{type:'String',required:true},
message:{type:'String',required:true}

})
const Contact = mongoose.model('Contact',Schyma)
module.exports=Contact