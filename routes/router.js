const express = require('express');
const router = express.Router();
const AppController = require('../app/controller/AppController');
const PostController = require('../app/controller/PostController');

router.get('', AppController.index);
router.get('/about', AppController.about);

router.post('/post', PostController.store);
router.get('/post/:id', PostController.show);
module.exports = router;