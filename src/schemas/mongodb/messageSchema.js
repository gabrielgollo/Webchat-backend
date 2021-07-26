const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    userId: {
        type: String,
    },
    name:{
        type: String,
    },
    message:{
        type: String,
    },
    date:{
        type: Date,
    }
})