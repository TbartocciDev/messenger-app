var express = require('express');
var router = express.Router();
const chatsCtrl = require('../controllers/chats')

const ensureLoggedIn = require('../config/ensureLoggedIn');
const checkForAccount = require('../config/checkForAccount');

router.get('/', ensureLoggedIn, checkForAccount, chatsCtrl.index)

router.get('/:id', ensureLoggedIn, chatsCtrl.show)

router.get('/:id/info', ensureLoggedIn, chatsCtrl.info)

module.exports = router;
