const mongoose = require('mongoose')


module.exports = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    login:{
        type: String,
    },
    password:{
        type: String,
    },
})