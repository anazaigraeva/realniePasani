const AuthController = require('../controllers/AuthController');
const { verifyRefreshToken } = require('../middlewares/verifyTokens');

const authRouter = require('express').Router();

authRouter.post('/signup', AuthController.signup);
authRouter.get('/refresh', verifyRefreshToken, AuthController.refresh);
authRouter.delete('/signout', AuthController.signout);

module.exports = authRouter;
