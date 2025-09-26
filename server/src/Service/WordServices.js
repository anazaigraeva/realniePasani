const { Word } = require('../../db/models');

class WordService {
  static async getAll() {
    return Word.findAll();
  }

  static async getWordCateg(categoryId) {
    return Word.findAll({ where: { categoryId } });
  }

  static async createWord({
    sleng,
    description,
    example,
    translate,
    categoryId,
    userId,
  }) {
    return Word.create({ sleng, description, example, translate, categoryId, userId });
  }

  static async getByUser(userId) {
    return Word.findAll({ where: { userId } });
  }

  static async deleteIfAuthor(wordId, userId) {
    const word = await Word.findByPk(wordId);
    if (!word) return { deleted: false, reason: 'not_found' };
    if (word.userId !== userId) return { deleted: false, reason: 'forbidden' };
    await word.destroy();
    return { deleted: true };
  }
}

module.exports = WordService;
