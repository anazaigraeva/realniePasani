const WordService = require('../Service/WordServices');

class WordController {
  static async getAll(req, res) {
    try {
      const allWords = await WordService.getAll();
      console.log(allWords);
      res.send(allWords);
    } catch (error) {
      console.log({ error: error.message });
    }
  }
}

module.exports = WordController;
