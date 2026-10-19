const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller.js');

// Daftar film
router.get('/', pageController.getKatalog);       
// Detail film  
router.get('/item/:id', pageController.getDetail);  

// == Memanggil 404 ==
router.use(pageController.getNotFound);

module.exports = router;