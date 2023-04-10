const Chat = require('../models/chat');
const Account = require('../models/account');

module.exports = {
  index,
  show,
  createMessage,
  info
};

async function index(req,res) {
  const account =  await Account.findOne({googleId: req.user.googleId})
  const chats = await Chat.find({'members': [account]})
  
  res.render('chats/index',{account,chats})
}

async function show(req,res) {
  const account =  await Account.findOne({googleId: req.user.googleId})
  const chat = await Chat.findById(req.params.id)

  res.render('chats/show', {account,chat})
}

async function createMessage(req,res) {
  res.render('chats/show', {})
}

async function info(req,res) {
  res.render('chats/info')
}