const express = require("express");

const router = express.Router();
const homeController = require('../controller/home_controller');



console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users')); // to go to other file we use use

module.exports = router;