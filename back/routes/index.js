var express = require('express');
const controlerAdmin = require('../controller/controleurAdmin');
const upload = require('../middlewares/multer');
const requireAuth = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.post('/projet', upload.single('image') , controlerAdmin.ProjetPost);
router.post('/inscription',  controlerAdmin.inscription);
router.post('/connexion',controlerAdmin.connexion);

//upload.single('image'),
module.exports = router;
