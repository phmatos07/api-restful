const express = require('express');
const router = express.Router();

// POST
router.post('/user', require('./create-user.controller'));

// GET
router.get('/user', require('./get-user.controller'));

// PUT
// DELETE

module.exports = router;
