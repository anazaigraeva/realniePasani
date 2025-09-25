const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
// const verifyAccessToken = require('../middlewares/verifyTokens');


router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

module.exports = router;