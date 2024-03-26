var express = require('express');
const controlerAdmin = require('../controller/controleurAdmin');
const upload = require('../middlewares/multer');
const requireAuth = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.post('/projet', upload.single('image') , controlerAdmin.ProjetPost);
router.post('/inscription', upload.single('image'), controlerAdmin.inscription);
router.post('/connexion',controlerAdmin.connexion);
router.get('/utilisateur',controlerAdmin.toutUser);
router.get('/utilisateur/:id',controlerAdmin.getUserId);
router.post('/modif/:id', upload.single('image'), controlerAdmin.modif) 

//upload.single('image'),
module.exports = router;
