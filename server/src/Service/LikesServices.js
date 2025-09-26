const { Like } = require('../../db/models');
const { Word, Sequelize } = require('../../db/models');
const { Op } = require('sequelize');

class LikesService {
  static async getAll() {
    return Like.findAll();
  }

  static async getByUserId(id) {
    return Like.findAll({ where: { userId: id } });
  }

  static async addLike(userId, wordId) {
    const like = await Like.create({ userId, wordId });
    return like;
  }

  // --------------------------------------------------------------------------------

  static async toggleLike(userId, wordId) {
    const exists = await Like.findOne({ where: { userId, wordId } });
    if (exists) {
      await exists.destroy();
      return { liked: false };
    }
    await Like.create({ userId, wordId });
    return { liked: true };
  }

  static async getUserLikedWithWords(userId) {
    return Like.findAll({
      where: { userId },
      include: [{ model: Word }],
    });
  }

  static async getCounts(wordIds) {
    const rows = await Like.findAll({
      attributes: ['wordId', [Sequelize.fn('COUNT', Sequelize.col('wordId')), 'count']],
      where: { wordId: { [Op.in]: wordIds } },
      group: ['wordId'],
    });
    const map = {};
    rows.forEach((r) => {
      map[r.wordId] = Number(r.get('count'));
    });
    wordIds.forEach((id) => {
      if (map[id] == null) map[id] = 0;
    });
    return map;
  }

  static async top10() {
    const rows = await Like.findAll({
      attributes: ['wordId', [Sequelize.fn('COUNT', Sequelize.col('wordId')), 'count']],
      include: [{ model: Word }],
      group: ['wordId', 'Word.id'],
      order: [[Sequelize.literal('count'), 'DESC']],
      limit: 10,
    });
    return rows;
  }
}

module.exports = LikesService;
