const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", function (req, res) {
  res.send("Hello world!");
});

module.exports = userRouter;
