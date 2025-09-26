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
      const like = await LikesService.addLike(userId, wordId);
      res.send(like);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  static async toggle(req, res) {
    try {
      const userId = res.locals.user.id;
      const { wordId } = req.body;
      if (!wordId) return res.status(400).json({ message: 'wordId required' });
      const result = await LikesService.toggleLike(userId, wordId);
      return res.json(result);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }

  static async me(req, res) {
    try {
      const userId = res.locals.user.id;
      const likes = await LikesService.getUserLikedWithWords(userId);
      return res.json(likes);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }

  static async counts(req, res) {
    try {
      const ids = String(req.query.wordIds || '')
        .split(',')
        .map((s) => Number(s))
        .filter((n) => Number.isFinite(n));
      if (ids.length === 0) return res.json({});
      const map = await LikesService.getCounts(ids);
      return res.json(map);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }

  static async top(req, res) {
    try {
      const rows = await LikesService.top10();
      return res.json(rows);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }
}
module.exports = LikesController;
