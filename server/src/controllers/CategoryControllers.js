const CategoryService = require('../Service/CategoryService');

class CategotyController {
  static async getAll(req, res) {
    try {
      const allCategory = await CategoryService.getAll();
      // console.log(allCategory);
      res.send(allCategory);
    } catch (error) {
      console.log({ error: error.message });
    }
  }
}

module.exports = CategotyController;
