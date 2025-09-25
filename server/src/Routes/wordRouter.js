const express = require('express');
const WordController = require('../controllers/wordController');

const router = express.Router();

router.get('/', WordController.getAll);
router.get('/:id', WordController.getWordCateg);

module.exports = router;
