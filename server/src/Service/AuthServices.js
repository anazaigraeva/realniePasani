const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class AuthService {
  static async signup({ password, email, login }) {
    if (!password || !email || !login) {
      throw new Error('Все поля должны быть заполнены');
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.hashpass);
      if (!isPasswordValid) {
        throw new Error('Неверный пароль');
      }

      const plainUser = user.get();
      delete plainUser.hashpass;
      return plainUser;
    }

    const hashpass = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, email, hashpass });

    const plainUser = newUser.get();
    delete plainUser.hashpass;
    return plainUser;
  }

  static async signin({ password, email }) {
    if (!password || !email) {
      throw new Error('Не заполнены все данные пользователя');
    }

    const user = await User.findOne({ where: { email } });

    const hashpass = await bcrypt.compare(password, user.hashpass);
    if (!hashpass) {
      throw new Error('Неверный пароль');
    }

    const plainUser = user.get();

    delete plainUser.hashpass;

    return plainUser;
  }
}

module.exports = AuthService;
