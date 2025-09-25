const WordCategService = require('../Service/WordCategService');

class WordCategController {
  static async getWordCateg(req, res) {
    try {
       const { id } = req.params
      const allWordCateg = await WordCategService.getWordCateg(id);
      res.send(allWordCateg);
    } catch (error) {
      console.log({ error: error.message });
    }
  }
}

module.exports = WordCategController;
