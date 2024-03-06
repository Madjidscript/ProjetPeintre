
const path = require("path/win32");
const otherProjet = require('../other/projet')
const {request,response}=require('express')
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

    
    
     }

module.exports =controlerAdmin