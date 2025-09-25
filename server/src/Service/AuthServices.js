const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class AuthService {
  static async signup({ password, email, name }) {
    if (!password || !email || !name) {
      throw new Error('Все поля должны быть заполнены');
    }

    const hashpass = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        hashpass,
      },
    });

    if (!created) {
      throw new Error('Email уже занят');
    }

    const plainUser = user.get();

    delete plainUser.hashpass;

    return plainUser;
  }
}

module.exports = AuthService;
