const AIService = require('../Service/ChatService');

class AIController {
  static async ask(req, res) {
    try {
      console.log(req.body);
      // console.log(Object.keys(req.body)[0], '------------');

      
      const answer = await AIService.ask(req.body.sleng);
      res.json({ role: 'assistant', content: answer });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = AIController;
