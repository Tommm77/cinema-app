const express = require('express');
const expressRouter = express.Router();
const userController = require('../../controllers/user');
const JWTGuard = require('../../config/passport');

expressRouter.get('/users', userController.getAll);
expressRouter.get('/user/:id', JWTGuard.checkIsAuth, userController.getById);
expressRouter.post('/user', userController.create);
expressRouter.patch('/user/:id', userController.update);
expressRouter.delete('/user/:id', userController.delete);

module.exports = expressRouter;
