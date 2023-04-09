const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    members: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    messages: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Chat', chatSchema);