const express = require('express');

const { getGreetingsMessage } = require('../controllers/hello');

const router = express.Router();

// hello message response
router.get('/hello', getGreetingsMessage);

module.exports = router;
