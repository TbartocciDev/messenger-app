const express = require('express');
const router = express.Router();
const friendsCtrl = require('../controllers/friends');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/account/:id/friends', ensureLoggedIn, friendsCtrl.find);

module.exports = router;