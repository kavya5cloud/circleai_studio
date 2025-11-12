// src/routes/generateRoutes.js

const express = require('express');
const router = express.Router();
const { generateTextController } = require('../controllers/generateController');

// Route for generating text
router.post('/text', generateTextController);

module.exports = router;