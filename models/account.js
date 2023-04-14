const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

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
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true,
    },
    friends: [friendSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Account',accountSchema)