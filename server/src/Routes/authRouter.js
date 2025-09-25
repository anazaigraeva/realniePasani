const AuthController = require('../controllers/AuthController');

const authRouter = require('express').Router();

authRouter.post('/signup', AuthController.signup);
authRouter.get('/refresh', AuthController.refresh);
authRouter.delete('/signout', AuthController.signout)

module.exports = authRouter