const AiController = require("../controllers/chatController");
// const verifyAccessToken = require("../middlewares/verifyAccessToken");

const aiRouter = require("express").Router();

aiRouter.post('/ask', AiController.ask);

module.exports = aiRouter;