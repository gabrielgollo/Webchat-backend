const Exception = require("../helpers/exception");
const UserModel = require("../models/mongodb/userModel");
const validateMessage = require("../schemas/validateMessage");

class UserController {
  static async createUser(req, res, next) {
    try {
      const message = req.body;
      await validateMessage(message, "createUserSchema");
      const existUser = await UserModel.searchUser({ name: message.name });
      if (existUser) {
        throw new Exception("User already exist", "User already exist", 409);
      }
      const user = await UserModel.insertUser(message);
      delete user.password;
      res.status(201).json({
        status: 201,
        data: user,
        message: "User created successfully",
      });
    } catch (error) {
      res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }

  static async userLogin(req, res, next) {
    try {
      const message = req.body;
      await validateMessage(message, "loginSchema");
      const user = await UserModel.searchUser(message);

      if (!user) {
        throw new Exception("User not found", "User not found", 404);
      }
      delete user.password;
      res.status(200).json({
        status: 200,
        data: {
          userId: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
        },
        message: "User login successfully",
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: error.message,
      });
    }
  }

  static async deleteUser(req, res, next) {}
}

module.exports = UserController;
