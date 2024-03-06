var express = require('express');
const controlerAdmin = require('../controller/controleurAdmin');
const upload = require('../middlewares/multer');
var router = express.Router();

/* GET home page. */
router.post('/projet', upload.single('image') , controlerAdmin.ProjetPost);

//upload.single('image'),
module.exports = router;
