const LikesService = require('../Service/LikesServices');

class LikesController {
  static async getAll(req, res) {
    try {
      const allLikes = await LikesService.getAll();

      res.send(allLikes);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  static async getByUserId(req, res) {
    try {
      const { id } = req.params;
      const likes = await LikesService.getByUserId(id);

      res.send(likes);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  static async addLike(req, res) {
    try {
      const { userId, wordId } = req.body;
      const find = await LikesService.getByWordAndUser(userId, wordId);
      if (!find) {
        const added = await LikesService.addLike(userId, wordId);
        res.send(added);
      }
      if (find) {
        const deleted = await LikesService.deleteLike(userId, wordId);
        res.send(deleted);
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  // static async deleteLike(req, res) {
  //   try {
  //     const { userId, wordId } = req.body;
  //     const result = await LikesService.deleteLike(userId, wordId);
  //     res.send(result);
  //   } catch (error) {
  //     console.log({ error: error.message });
  //     res.status(500).json({ error: error.message });
  //   }
  // }
}
module.exports = LikesController;
