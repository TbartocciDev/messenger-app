const Account = require('../models/account')

module.exports = {
    create,
    indexNew
}

async function create(req,res) {
    console.log(req.body)
    
    res.render('chats-screen')
}

async function indexNew(req,res) {
    
    res.render('account/new')
}

