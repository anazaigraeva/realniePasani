const UserService = require('../Service/UserServices');

class UserController {
  static async getAll(req, res) {
    const allUsers = await UserService.findAll();
    res.send(allUsers);
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.findById(id);
      if (!user) {
        return res.status(404).send('Юзер не найден');
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}
module.exports = UserController;
