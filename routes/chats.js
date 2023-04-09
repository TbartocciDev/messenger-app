var express = require('express');
var router = express.Router();
const chatsCtrl = require('../controllers/chats')

const ensureLoggedIn = require('../config/ensureLoggedIn');
const checkForAccount = require('../config/checkForAccount');

router.get('/', ensureLoggedIn, checkForAccount, chatsCtrl.index)

router.get('/messages', chatsCtrl.show)

module.exports = router;
