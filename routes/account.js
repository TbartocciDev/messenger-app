const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');
const checkForAccount = require('../config/checkForAccount');

const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/new', ensureLoggedIn, accountCtrl.new)
router.get('/:id', ensureLoggedIn, accountCtrl.show)
router.get('/:id', ensureLoggedIn, accountCtrl.edit)
router.post('/', ensureLoggedIn, accountCtrl.create)
router.put('/:id', ensureLoggedIn, accountCtrl.update)

module.exports = router