const Postuler = require("../model/postuler")

const otherPostuler = class {
static afficheTout = async()=>{
  try {
    const affiche = await Postuler.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Postuler.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Postuler.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Postuler.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Postuler.findByIdAndRemove(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static update= async(id,data)=>{
    try {
        const modif = await Postuler.findByIdAndUpdate(id,data)
        return modif
    } catch (error) {
        console.log("mon erreur",error);
    }
}
}
module.exports= otherPostuler