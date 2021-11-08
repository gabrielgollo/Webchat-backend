const express = require("express");
const messageController = require("./controller/messageController");
const UserController = require("./controller/userController");
const routes = express.Router();

const Auth = require("./middlewares/auth");

routes.get("/", (req, res) => {
  res.send(`${Date.now()} -- Try other another route`);
});

routes.get("/api", (req, res) => {});

routes.post("/api/user/create", UserController.createUser);

routes.post("/api/user/login", UserController.userLogin);

routes.put("/api/user/update", (req, res) => {});

routes.get(
  "/api/message/get",
  Auth.validateToken,
  messageController.showMessages
);
routes.post(
  "/api/message/insert",
  Auth.validateToken,
  messageController.insertMessage
);

module.exports = routes;
