const express = require('express');
const WordController = require('../controllers/wordController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const router = express.Router();

router.get('/', WordController.getAll);
// Place specific routes before parameterized ones
router.get('/me/mine', verifyAccessToken, WordController.getMine);
router.get('/:id', WordController.getWordCateg);
router.post('/', verifyAccessToken, WordController.create);
router.delete('/:id', verifyAccessToken, WordController.delete);

module.exports = router;
