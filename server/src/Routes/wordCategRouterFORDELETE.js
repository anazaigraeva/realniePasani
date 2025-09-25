const WordCategController = require('../controllers/WordCategController');

const wordCategRouter = require('express').Router();

wordCategRouter.get('/:id', WordCategController.getWordCateg);

module.exports = wordCategRouter;
