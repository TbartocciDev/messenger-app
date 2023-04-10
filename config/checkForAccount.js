const Account = require('../models/account')

module.exports = async function(req,res,next) {
    const accounts = await Account.find({})
    let accontExists = false 
    accounts.forEach(function(a) {
        if (req.user.googleId === a.googleId) {
            accontExists = true
        }
    })

    if (accontExists) return next()
    res.redirect('/account/new')
}