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

  static async updateMe(req, res) {
    try {
      const id = res.locals.user.id;
      const { login, email } = req.body;
      const updated = await UserService.updateById(id, { login, email });
      if (!updated) return res.sendStatus(404);
      return res.json(updated);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}
module.exports = UserController;
