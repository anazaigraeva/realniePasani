const chatService = require('../Service/ChatService');

class ChatController {
  static async askChat(req, res) {
    const { message } = req.body;
    const aiResponse = await chatService.ask(message);
    res.json(aiResponse);
  }
}

module.exports = ChatController;