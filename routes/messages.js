const express = require('express');
const router = express.Router();
const messagesCtrl = require('../controllers/messages');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/chats/:id/messages', ensureLoggedIn, messagesCtrl.create);

// router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.deleteReview)

module.exports = router;