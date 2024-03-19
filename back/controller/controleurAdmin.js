
const path = require("path/win32");
const bcrypt = require('bcrypt')
const otherProjet = require('../other/projet')
const {request,response}=require('express');
const otherUser = require("../other/user");
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
            password:hashpass
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
        message="l'utilisateur n'existe pas"
        res.json(message)
      }else{
        const verifpass = await bcrypt.compare(password,admin.password)
        if (verifpass) {
             const { password, ...data2 }= admin._doc
            
            console.log("mon nouveau admin",admin,"mon data2",data2)
            
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




   
      

    
    
     }

module.exports =controlerAdmin