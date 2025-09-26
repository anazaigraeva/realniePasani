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

  static async create(req, res) {
    try {
      const userId = res.locals.user.id;
      const { sleng, description, example, translate, categoryId } = req.body;
      if (!sleng || !description || !categoryId)
        return res.status(400).json({ message: 'Missing required fields' });
      const created = await WordService.createWord({
        sleng,
        description,
        example,
        translate,
        categoryId,
        userId,
      });
      return res.status(201).json(created);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }

  static async getMine(req, res) {
    try {
      const userId = res.locals.user.id;
      const words = await WordService.getByUser(userId);
      return res.json(words);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }

  static async delete(req, res) {
    try {
      const userId = res.locals.user.id;
      const { id } = req.params;
      const result = await WordService.deleteIfAuthor(id, userId);
      if (!result.deleted && result.reason === 'not_found') return res.sendStatus(404);
      if (!result.deleted && result.reason === 'forbidden') return res.sendStatus(403);
      return res.sendStatus(204);
    } catch (error) {
      console.log({ error: error.message });
      return res.sendStatus(500);
    }
  }
}

module.exports = WordController;
