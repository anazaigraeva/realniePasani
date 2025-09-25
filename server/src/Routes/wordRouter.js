const express = require('express');
const WordController = require('../controllers/wordController');

const router = express.Router();

router.get('/', WordController.getAll);

module.exports = router;
