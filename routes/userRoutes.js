const controller = require('../controllers/userControllers');
const express = require('express');
const {Router} = express;
const router = Router();

router.post('/api/register' , controller.regiterUser);


module.exports = router;