const express = require('express');
const router = express.Router();

const {
    contact
} = require('../controllers/ContactController')

router.post('/post' , contact)
module.exports = router
// vue que j'ai un expor je vais recuper mon const router dans index.js contact router 