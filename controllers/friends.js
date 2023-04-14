const Account = require('../models/account');

module.exports = {
  findFriend,
  deleteFriend
};

async function findFriend(req,res) {
    const account = await Account.findOne({googleId: req.user.googleId})
    const friendInfo = await searchForCode(req.body.userId, account)

    req.body.googleId = friendInfo.googleId
    req.body.displayName = friendInfo.displayName
    console.log(req.body)

    account.friends.push(req.body)

    if (friendInfo != null) {
        try {
            await account.save()
        } catch (err) {
            console.log(err)
        }
    }
    res.redirect(`/account/${account._id}/friends`)
}
async function deleteFriend(req,res) {
    const account = await Account.findOne({googleId: req.user.googleId})

    account.friends.remove(req.body)
    await account.save()
    res.redirect(`/account/${account._id}/friends`)
}

async function searchForCode(code, account) {
    const accounts = await Account.find({})

    let isFound = false
    let friendAccount = null
    Array.from(accounts).forEach(function(a) {
        if (a.userId === code && a.userId != account.userId) {
            friendAccount = a
            isFound = true
        } 
    })
    if (isFound) {
        console.log('found friend')
        return friendAccount
    } else {
        console.log('no account found in records')
        return null
    }
}