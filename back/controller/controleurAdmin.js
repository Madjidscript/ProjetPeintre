
const path = require("path/win32");
const bcrypt = require('bcrypt')
const otherProjet = require('../other/projet')
const {request,response}=require('express');
const otherUser = require("../other/user");
const { mailer2 } = require("../middlewares/mailer2");
const controlerAdmin = class {
    static ProjetPost= async (req=request,res=response)=>{
    
       let message=""
    const Insert = await otherProjet.inscription({
        nom:req.body.nom,
        description:req.body.description,
        image:req.file.path
    
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
    static inscription= async (req=request,res=response)=>{
      console.log('mon body',req.body);
      const password = req.body.password
      const mail = req.body.email
      const images = req.file.path
      const fonctions = req.body.fonction
      let message = ""
      const email = await otherUser.utilisateurParEmail(mail)
      if (email) {
        message="l'utilisateur existe deja"
        res.json(message)
      }else{
        const hashpass = await bcrypt.hash(password,10)
        let data={
            nom:req.body.nom,
            email:mail,
            password:hashpass,
            fonction:fonctions,
            image:images
        }
        const insertion =await otherUser.inscription(data)
        if (insertion) {
            message="insertion effectuer avec succes"
            console.log('mon inscription',insertion);
            res.json(message)
        }
      }

   
    }
    static connexion= async (req=request,res=response)=>{
      console.log('mon body',req.body);
      const password = req.body.password
      const mail = req.body.email
      let message = ""
      const admin = await otherUser.utilisateurParEmail(mail)
      if (!admin) {
        message="email incorrect"
        res.json(message)
      }else{
        const verifpass = await bcrypt.compare(password,admin.password)
        if (verifpass) {
             const { password, ...data2 }= admin._doc
            
            console.log("mon nouveaus admin",admin,"mon data2",data2)
            
            // req.session.admin = data2
            // console.log("ma session est presente",req.session.admin);
            message='connexion bele et bien effectuer'
            res.json({message,data2})
        }else{
            message="mot de passe incorrect"
            res.json(message)
        }
      }
    }

    static toutUser = async(req=request,res=response)=>{
      let message=""
    const recup = await otherUser.afficheTout()
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


  static getUserId= async(req=request,res=response)=>{
    const id = req.params.id
    console.log("mon id des",id);
      let message=""
    const recup = await otherUser.utilisarteuParID(id)
    if (recup) {
      message='recuperation bien effectuer'
      console.log("ma recuperation",recup);
      res.json({recup,message})
    }else{
      message='recuperation echouer'
      console.log("mon message",message);
      res.json({message})
    }
  console.log('ma recuperation hooààào');
  }




  static modif = async(req=request,res=response)=>{
    let message=""
    console.log("mon post hooo",req.body);
    const ids = req.params.id
    const password = req.body.password
    const mail = req.body.email
    const images = req.body.image
    const fonctions = req.body.fonction
    const hashpass = await bcrypt.hash(password,10)
      let data={
          nom:req.body.nom,
          email:mail,
          password:hashpass,
          fonction:fonctions,
          image:images
      }
    const Modif= await otherUser.update(ids,data)

    if (Modif) {
      console.log("mon Modifion",Modif,Modif.nom);
      message="Modifion valider"
       mailer2(Modif.email,Modif.nom,req.body.password,Modif.fonction)
    
      let verifEMAIl = mailer2
      if (verifEMAIl) {
        message="modification valider"
        res.json(message)
      }
    
  }else{
      console.log('une erreur survenue');
      message="modification echouer"
      res.json(message)
  }
  }

  static supp = async(req=request,res=response)=>{
    const id =req.params.id
    console.log("mon id",id);
    let message =""
    const sup = await otherUser.suppression(id)
    if (sup) {
      console.log("ma suppression")
      message='suppression efectuer'
      res.json(message)
    } else {
      message ="suppression dutilisateur echouer"
      console.log('mon message',message);
      res.json(message)
    }
  }




   
      

    
    
     }

module.exports =controlerAdmin