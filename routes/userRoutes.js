const controller = require('../controllers/userControllers');
const express = require('express');
const {Router} = express;
const router = Router();

router.post('/api/register' , controller.regiterUser);
router.post('/api/login' , controller.loginUser);

module.exports = router;