const express = require('express');
const LikesController = require('../controllers/LikesController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const router = express.Router();

router.get('/', LikesController.getAll);
router.get('/counts', LikesController.counts);
router.get('/top', LikesController.top);
router.get('/me', verifyAccessToken, LikesController.me);
router.get('/:id', LikesController.getByUserId);
router.post('/toggle', verifyAccessToken, LikesController.toggle);

module.exports = router;
