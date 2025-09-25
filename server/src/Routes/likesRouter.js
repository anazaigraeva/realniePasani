const express = require('express');
const LikesController = require('../controllers/LikesController');
const router = express.Router();

router.get('/', LikesController.getAll);
router.get('/:id', LikesController.getByUserId);
router.post('/', LikesController.addLike);

module.exports = router;
