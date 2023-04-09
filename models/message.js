const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    },
    sentTime: {
        type: Date,
        default: new Date()
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Message', messageSchema);