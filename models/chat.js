const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const chatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }],
    messages: [messageSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Chat', chatSchema);