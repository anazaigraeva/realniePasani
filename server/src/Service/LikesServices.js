const { Like } = require('../../db/models');

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
}

module.exports = LikesService;
