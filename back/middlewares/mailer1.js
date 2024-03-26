const nodemailer = require("nodemailer");
require('dotenv').config()

exports.mailer1 = (email,nom,poste)=>{
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
      Nous vous remercions d'avoir postulé pour ${poste} chez <strong>Md service <strong/>. Nous avons bien reçu votre demande d'emploi et nous vous en remercions.

Votre candidature a retenu notre attention et nous sommes actuellement en train de l'examiner attentivement. Nous souhaitons vous informer que notre service de communication prendra contact avec vous dans les plus brefs délais pour organiser un entretien.

Nous vous encourageons à rester disponible dans les jours à venir pour toute communication de notre part. Nous apprécions votre intérêt pour rejoindre notre équipe et nous sommes impatients de discuter avec vous de votre expérience et de vos qualifications.

Si vous avez des questions ou si vous souhaitez fournir des informations supplémentaires, n'hésitez pas à nous contacter à l'adresse abdoul.latoundji@uvci.edu.ci ou par téléphone au 01 53 53 50 65.
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

