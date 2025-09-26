const { User } = require('../../db/models');

class UserService {
  static async findAll() {
    const users = await User.findAll();
    return users;
  }

  static async findById(id) {
    const user = await User.findByPk(id);
    return user;
  }

  static async updateById(id, payload) {
    const user = await User.findByPk(id);
    if (!user) return null;
    const updatable = {};
    if (payload.login != null) updatable.login = payload.login;
    if (payload.email != null) updatable.email = payload.email;
    await user.update(updatable);
    return user;
  }
}

module.exports = UserService;
