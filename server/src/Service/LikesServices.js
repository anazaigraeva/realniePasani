const { Like } = require('../../db/models');

class LikesService {
  static async getAll() {
    return Like.findAll();
  }

  static async getByUserId(id) {
    return Like.findAll({ where: { userId: id } });
  }

  static async getByWordAndUser(userId, wordId) {
    try {
      const word = await Like.findAll({ where: userId, wordId });
      return word;
    } catch (error) {
      console.log(error);
    }
  }

  static async addLike(userId, wordId) {
    try {
      const like = await Like.create({ userId, wordId });
      console.log(like, 'крутой !!!!!');

      return like;
    } catch (error) {
      console.log(error, 'ты шо еблан');
    }
  }

  static async deleteLike(userId, wordId) {
    try {
      const result = await Like.destroy({ where: { userId, wordId } });
      console.log(result, 'лайк удален !!!!!');

      return result;
    } catch (error) {
      console.log(error, 'Куда тыкаешь, дебилуша?');
    }
  }
}

module.exports = LikesService;
