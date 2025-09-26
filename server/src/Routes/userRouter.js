const express = require('express');
const UserController = require('../controllers/UserController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const router = express.Router();
// const verifyAccessToken = require('../middlewares/verifyTokens');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.put('/me', verifyAccessToken, UserController.updateMe);

module.exports = router;
