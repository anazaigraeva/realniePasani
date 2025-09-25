const ChatController = require('../controllers/chatController');

const chatRouter = require('express').Router();

chatRouter.post('/messages', ChatController);

module.exports = chatRouter;