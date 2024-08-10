const { Router } = require("express");
const indexController = require("../controllers/indexController");
const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const typeController = require("../controllers/typeController");
const manufacturerController = require("../controllers/manufacturerController");
const userRouter = Router();

userRouter.get("/", indexController.inventoryPageGet);

userRouter.get("/items", itemController.itemsGet);

module.exports = userRouter;
