const nodemailer = require("nodemailer");
require('dotenv').config()

exports.mailer = (email,nom)=>{
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
      html: `<p>
      Objet: Réception de votre message

Cher/Chère <strong>${nom}<strong/>,

Nous vous remercions d'avoir pris le temps de nous contacter. Nous avons bien reçu votre message et nous tenons à vous informer que nous accordons une grande importance à chaque retour que nous recevons de nos utilisateurs.

Notre équipe de support client examinera votre message attentivement et fera de son mieux pour répondre à votre préoccupation dans les plus brefs délais. Votre satisfaction est notre priorité absolue, et nous sommes là pour vous aider.

N'hésitez pas à nous contacter à nouveau si vous avez d'autres questions ou préoccupations. Nous sommes là pour vous accompagner.

Cordialement,
<strong>Md service <strong/>
</p> 
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
