const Account = require('../models/account')

module.exports = {
    create,
    new: indexNew,
    show,
    edit,
    update,
    showFriends
}

async function create(req,res) {
    req.body.googleId = req.user.googleId
    req.body.fullName = req.user.name
    console.log(req.body)

    try {
        await Account.create(req.body)
        res.redirect('/chats')
    } catch (err) {
        console.log(err)
        res.render('/account/new')
    }
}

async function indexNew(req,res) {
    const uniqueId = await generateUserCode()
    
    res.render('account/new', {uniqueId})
}

async function show(req,res) {
    const account = await Account.findOne({googleId: req.user.googleId})

    res.render('account/show', {account})
}

async function edit(req,res) {
    const account = await Account.findOne({googleId: req.user.googleId})

    res.render('account/show', {account})
}

async function update(req,res) {
    const account =  await Account.findByIdAndUpdate(req.params.id, req.body)

    res.redirect(`/account/${account._id}`)
}

async function showFriends(req,res) {
    const accounts = await Account.find({})
    const account = await Account.findOne({googleId: req.user.googleId})
    const friends = account.friends

    res.render('friends/index', {account, accounts, friends})
}

async function generateUserCode() {
    let charType = 0 
    let charStyle = 0
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const numbers = ['0','1','2','3','4','5','6','7','8','9']

    let index = 0
    let code = []
    let charCount = 0
    while (charCount < 12) {
        charType = (Math.floor(Math.random() * 2))
        if (charType === 0) {
            charStyle = (Math.floor(Math.random() * 2))
            index = (Math.floor(Math.random() * 24))
            if (charStyle === 0) {
                code.push(alphabet[index].toLowerCase())
            } else {
                code.push(alphabet[index].toUpperCase())
            }
        } else {
            index = (Math.floor(Math.random() * 10))
            code.push(numbers[index])
        }
        if (charCount === 3 || charCount === 7) {
            code.push('-')
        }
        charCount += 1
    }

    const uniqueCode = code.join('')
    if (await Account.find({userId: uniqueCode})) {
        return uniqueCode
    } else {
        generateUserCode()
    }

}