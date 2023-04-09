const Account = require('../models/account')

module.exports = async function(req,res,next) {
    const accounts = await Account.find({})
    console.log('Looking for sccount')
    accounts.forEach(function(a) {
        if (req.userId === a.googleId) {
            return next()
        }
    })
    res.redirect('/create-account')
}