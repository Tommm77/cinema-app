const express = require('express');
const expressRouter = express.Router();
const authController = require('../../controllers/auth');

expressRouter.post('/login', authController.login);
expressRouter.post('/registration', authController.signUp);

module.exports = expressRouter;
