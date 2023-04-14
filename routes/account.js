const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');
const checkForAccount = require('../config/checkForAccount');

const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/new', ensureLoggedIn, accountCtrl.new)
router.put('/:id', ensureLoggedIn, accountCtrl.update)

router.post('/new', ensureLoggedIn, accountCtrl.create)
router.get('/:id', ensureLoggedIn, accountCtrl.edit)
router.get('/:id', ensureLoggedIn, accountCtrl.show)
router.get('/:id/friends', ensureLoggedIn, accountCtrl.showFriends)



module.exports = router