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
}

module.exports = UserService;