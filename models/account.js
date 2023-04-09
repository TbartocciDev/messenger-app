const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    },
    displayName: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Account', accountSchema);