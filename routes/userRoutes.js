const controller = require('../controllers/userControllers');
const express = require('express');
const cors = require('cors');
const {Router} = express;
const router = Router();

router.post('/api/register' , cors(), controller.regiterUser);
router.post('/api/login' , cors(),controller.loginUser);

module.exports = router;