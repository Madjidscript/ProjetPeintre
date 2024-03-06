const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
nom:{type:'String',required:true},
description:{type:'String',required:true},
image:{type:'String',required:true}

})
const Projet = mongoose.model('Projet',Schyma)
module.exports=Projet