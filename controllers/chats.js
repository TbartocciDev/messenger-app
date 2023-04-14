const Chat = require('../models/chat');
const Account = require('../models/account');

module.exports = {
  index,
  show,
  createMessage,
  info,
  edit,
  update,
  new: newChat,
  create: createChat,
  addMember
};

async function index(req,res) {
  const account =  await Account.findOne({googleId: req.user.googleId})
  const chats = await Chat.find({})
  const accounts = await Account.find({})
  
  res.render('chats/index',{account, chats, accounts})
}

async function show(req,res) {
  const accounts = await Account.find({})
  const account =  await Account.findOne({googleId: req.user.googleId})
  const chat = await Chat.findById(req.params.id)

  res.render('chats/show', {accounts,account,chat})
}

async function createMessage(req,res) {
  res.render('chats/show', {})
}

async function info(req,res) {
  const accounts = await Account.find({})
  const account =  await Account.findOne({googleId: req.user.googleId})
  const chat = await Chat.findById(req.params.id)
  console.log(chat.members[0].googleId)

  res.render('chats/info', {account,chat,accounts})
}

async function edit(req,res) {
  const chat = await Chat.findOne({_id: req.params.id})

  res.render('/info', {chat})
}

async function update(req,res) {
  await Chat.findByIdAndUpdate(req.params.id, req.body)

  res.redirect(`/chats/${req.params.id}`)
}

let members = []
async function newChat(req,res) {
  const account =  await Account.findOne({googleId: req.user.googleId})
  members = []
  members.push(account)

  res.render('chats/new', {account, members})
}

async function createChat(req,res) {
  const accounts = await Account.find({})
  const account =  await Account.findOne({googleId: req.user.googleId})
  req.body.members = members

  try {
    await Chat.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/chats')
}

async function addMember(req,res) {
  const account =  await Account.findOne({userId: req.body.member})
  members.push(account)

  res.render('chats/new', {account, members})
}