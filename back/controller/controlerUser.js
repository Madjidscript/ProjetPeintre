

const { mailer } = require('../middlewares/mailer')
const otherContact = require('../other/contact')
const otherPostuler = require('../other/postuler')
const otherProjet = require('../other/projet')
const otherUser= require('../other/user')

const {request,response}=require('express')
const controlerUser = class {
    static getProjet= async(req=request,res=response)=>{
        let message=""
      const recup = await otherProjet.afficheTout()
      if (recup) {
        message='recuperation bien effectuer'
        console.log("marecuperation",recup);
        res.json({recup,message})
      }else{
        message='recuperation echouer'
        console.log("mon message",message);
        res.json({message})
      }
    console.log('ma recuperation hooo');
    }


    static getDetail= async(req=request,res=response)=>{
      const id = req.params.id
        let message=""
      const recup = await otherProjet.utilisarteuParID(id)
      if (recup) {
        message='recuperation bien effectuer'
        console.log("marecuperation",recup);
        res.json({recup,message})
      }else{
        message='recuperation echouer'
        console.log("mon message",message);
        res.json({message})
      }
    console.log('ma recuperation hooo');
    }

    static postuler = async(req=request,res=response)=>{
      let message=""
      console.log("mon post hooo",req.body.nom);
      const Insert= await otherPostuler.inscription({
        prenom:req.body.prenom,
        nom:req.body.nom,
        email:req.body.email,
        numero:req.body.numero,
        adresse:req.body.adresse,
        poste:req.body.poste,
        motiv:req.body.motiv,
      })

      if (Insert) {
        console.log("mon insertion",Insert);
       
        
          message="insertion valider"
          res.json(message)
        
       
    }else{
        console.log('une erreur survenue');
        message="insertion echouer"
        res.json(message)
    }
    }
    static contact = async(req=request,res=response)=>{
      let message=""
      console.log("mon post hooo",req.body.nom);
      const Insert= await otherContact.inscription({
        prenom:req.body.prenom,
        nom:req.body.nom,
        email:req.body.email,
        objet:req.body.objet,
        message:req.body.message
      })

      if (Insert) {
        console.log("mon insertion",Insert,"mon email et mon nom",Insert[0].email,Insert[0].nom);
        message="insertion valider"
        mailer(Insert[0].email,Insert[0].nom)
        let verifEMAIl = mailer
        if (verifEMAIl) {
          message="insertion valider"
          res.json(message)
        }
      
    }else{
        console.log('une erreur survenue');
        message="insertion echouer"
        res.json(message)
    }
    }
    // static mail = async(req=request,res=response)=>{
    //   const mail = "13159596youssef@gmail.com"
    //     mailer(mail)
    //     res.send("bonjour")
      
    // }
}
module.exports =controlerUser