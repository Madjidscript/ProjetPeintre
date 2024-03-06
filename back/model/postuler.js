const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
prenom:{type:'String',required:true},
nom:{type:'String',required:true},
email:{type:'String',required:true},
numero:{type:'Number',required:true},
adresse:{type:'String',required:true},
poste:{type:'String',required:true},
motiv:{type:'String',required:true}

})
const Postuler = mongoose.model('Postuler',Schyma)
module.exports=Postuler