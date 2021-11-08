const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  login: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
