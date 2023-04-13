var express = require('express');
var router = express.Router();
const chatsCtrl = require('../controllers/chats')

const ensureLoggedIn = require('../config/ensureLoggedIn');
const checkForAccount = require('../config/checkForAccount');
const chat = require('../models/chat');

router.get('/', ensureLoggedIn, checkForAccount, chatsCtrl.index)
router.get('/new', ensureLoggedIn, chatsCtrl.new)
router.get('/:id', ensureLoggedIn, chatsCtrl.show)
router.get('/:id/info', ensureLoggedIn, chatsCtrl.info)

router.get('/:id/info', ensureLoggedIn, chatsCtrl.edit)
router.post('/', ensureLoggedIn, chatsCtrl.create)
router.put('/:id/info', ensureLoggedIn, chatsCtrl.update)

module.exports = router;
