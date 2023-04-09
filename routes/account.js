const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/create-account', accountCtrl.indexNew)
router.post('/rc', ensureLoggedIn, accountCtrl.create)

module.exports = router