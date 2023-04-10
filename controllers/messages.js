const Chat = require('../models/chat');
const Account = require('../models/account');

module.exports = {
  create
};

async function create(req,res) {
    const chat = await Chat.findById(req.params.id)

    req.body.senderId = req.user.googleId
    chat.messages.push(req.body)
    
    try {
        await chat.save()
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/chats/${chat._id}`)
}