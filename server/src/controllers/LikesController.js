
const LikesService = require('../Service/LikesServices');


class LikesController {
  static async getAll(req, res) {
    try {
      const allLikes = await LikesService.getAll();
      // console.log(allLikes);
      res.send(allLikes);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  static async getByUserId(req, res) {
    try {
      const { id } = req.params;
      const likes = await LikesService.getByUserId(id);
      // console.log(likes);
      res.send(likes);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  static async addLike(req, res) {
    try {
      const { userId, wordId } = req.body;
      const like = await LikesService.addLike(userId, wordId)
      res.send(like);
    } catch (error) {
      console.log({ error: error.message });
    }
  }
}
module.exports = LikesController;
