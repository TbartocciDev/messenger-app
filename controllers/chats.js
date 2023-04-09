const Chat = require('../models/chat');
const Account = require('../models/account');

module.exports = {
  index,
  show
};

async function index(req,res) {
    const chats = await Chat.find({})
    console.log(req.body)
    res.render('chats-screen')
}

async function show(req,res) {
    res.render('messages-screen')
}