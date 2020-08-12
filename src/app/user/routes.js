const express = require('express');
const router = express.Router();

// POST

// GET
router.get('/user', require('./get-user/get-user.controller'));

// PUT
// DELETE

module.exports = router;
