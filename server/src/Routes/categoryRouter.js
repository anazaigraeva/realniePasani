const express = require('express');
const CategotyController = require('../controllers/CategoryControllers');
const router = express.Router()

router.get('/', CategotyController.getAll);


module.exports = router;