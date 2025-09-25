const { Word } = require('../../db/models');

class WordService {
  static async getAll() {
    return Word.findAll();
  }

  static async getWordCateg(categoryId) {
    return Word.findAll({ where: { categoryId } });
  }
}

module.exports = WordService;
