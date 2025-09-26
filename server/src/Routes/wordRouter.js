const express = require('express');
const WordController = require('../controllers/wordController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const router = express.Router();

router.get('/', WordController.getAll);
router.get('/me/mine', verifyAccessToken, WordController.getMine);
router.post('/', verifyAccessToken, WordController.create);
router.delete('/:id', verifyAccessToken, WordController.delete);
router.get('/:id', WordController.getWordCateg);

module.exports = router;
