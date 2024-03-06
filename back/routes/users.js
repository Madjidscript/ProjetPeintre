var express = require('express');
var router = express.Router();
const controlerUser = require('../controller/controlerUser')
// /* GET users listing. */
 router.get('/projet', controlerUser.getProjet) 
 router.get('/detail/:id', controlerUser.getDetail) 
 router.post('/postuler', controlerUser.postuler) 
 router.post('/contact', controlerUser.contact) 
//  router.get('/email', controlerUser.mail) 

module.exports = router;
