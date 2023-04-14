const express = require('express');
const router = express.Router();
const friendsCtrl = require('../controllers/friends');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/account/:id/friends', ensureLoggedIn, friendsCtrl.findFriend);
router.delete('/account/:id/friends', ensureLoggedIn, friendsCtrl.deleteFriend)

module.exports = router;