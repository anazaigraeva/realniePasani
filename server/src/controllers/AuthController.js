const cookieConfig = require('../configs/cookie.config');
const AuthService = require('../Service/AuthServices');
const generateTokens = require('../utils/generateTokens');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController {
  static async signup(req, res) {
    try {
      const user = await AuthService.signup(req.body);
      const { refreshToken, accessToken } = generateTokens({ user });
      res
        .status(201)
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async refresh(req, res) {
    try {
     
      const { refreshToken } = req.cookies;
     
      
      const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

      const { refreshToken: newRefreshToken, accessToken } = generateTokens({ user });
      res
        .cookie('refreshToken', newRefreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      console.log(err);
      res.sendStatus(401);
    }
  }

  static async signout(req, res) {
    res.clearCookie('refreshToken').sendStatus(204);
  }
}

module.exports = AuthController;
