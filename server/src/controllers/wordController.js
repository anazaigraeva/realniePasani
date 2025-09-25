const WordService = require('../Service/WordServices');

class WordController {
  static async getAll(req, res) {
    try {
      const allWords = await WordService.getAll();
      // console.log(allWords);
      res.send(allWords);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  static async getWordCateg(req, res) {
    try {
      console.log(req.params);
      
      const { id } = req.params;
      const allWordCateg = await WordService.getWordCateg(id);
      res.send(allWordCateg);
    } catch (error) {
      console.log({ error: error.message });
    }
  }
}

module.exports = WordController;
