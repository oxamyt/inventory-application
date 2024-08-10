const { Router } = require("express");
const itemController = require("../controllers/itemController");
const userRouter = Router();

userRouter.get("/", function (req, res) {
  res.send("Hello world!");
});

module.exports = userRouter;
