const nodemailer = require("nodemailer");
require('dotenv').config()

exports.mailer2 = (email,nom,password,fonctions)=>{
    console.log('emm',email,"nom",nom );
  return new Promise((resolve,reject)=>{
  let transporter = nodemailer.createTransport({
      service:'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
      },
    });
  let mailOptions = {
      from: process.env.EMAIL, 
      to:email, 
      subject: "Connexion", // Subject line
      text: "Les coordonées de connexion", 
      html: `Objet : Confirmation de mise à jour de vos informations de compte

      Cher/Chère ${nom},
      
      Nous souhaitons vous informer que les modifications que vous avez apportées à vos informations de compte ont été enregistrées avec succès. Votre compte a été mis à jour avec les nouvelles informations que vous avez fournies.
      
      Voici un récapitulatif des modifications apportées à votre compte :
      
      ${nom},${email},${password},${fonctions}
      Si vous n'avez pas apporté ces modifications ou si vous avez des questions concernant ces changements, veuillez nous contacter immédiatement à l'adresse abdoul.latoundji@uvci.edu.ci pour que nous puissions examiner votre compte.
      
      Nous tenons à vous remercier pour votre coopération et votre engagement envers Md-Service. Si vous avez d'autres questions ou préoccupations, n'hésitez pas à nous contacter. Nous sommes là pour vous aider.
                  `  
    };

  transporter.sendMail(mailOptions, (error, info)=>{
   if (error) {
    console.log('error',error);
    reject(error);

   } else {
    console.log('success' , info.response);
    resolve(info.response);
   }
}); 
})
}

