const Account = require('../models/account')

module.exports = {
    create,
    new: indexNew,
    show,
    edit,
    update
}

async function create(req,res) {
    req.body.googleId = req.user.googleId
    req.body.fullName = req.user.name

    try {
        await Account.create(req.body)
        res.redirect('/chats')
    } catch (err) {
        console.log(err)
        res.render('/account/new')
    }
}

async function indexNew(req,res) {
    
    res.render('account/new')
}

async function show(req,res) {
    const account = await Account.findOne({googleId: req.user.googleId})

    res.render('account/show', {account})
}

async function edit(req,res) {
    const account = await Account.findOne({googleId: req.user.googleId})

    res.render('/show', {account})
}

async function update(req,res) {
    await Account.findByIdAndUpdate(req.params.id, req.body)

    res.redirect('/chats')
}
