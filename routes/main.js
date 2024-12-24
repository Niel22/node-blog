const express = require('express');
const router = express.Router();
const AppController = require('../app/controller/AppController')


router.get('', AppController.index);

router.get('/about', AppController.about);

module.exports = router;