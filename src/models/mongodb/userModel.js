const MongoDB = require("../../database/mongodb");

const connection = MongoDB.getOrCreateConnection();

const Schema = require("../../schemas/mongodb/userSchema");

const UserModel = connection.model("Users", Schema, "users");

UserModel.insertUser = (userObject) => {
  return UserModel.create(userObject);
};

UserModel.searchUser = (userObject) => {
  return UserModel.findOne(userObject);
};

UserModel.UpdateById = (id, userObject) => {
  UserModel.findByIdAndUpdate(id, userObject);
};

module.exports = UserModel;
