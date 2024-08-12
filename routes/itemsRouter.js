const { Router } = require("express");
const itemController = require("../controllers/itemController");

const itemsRouter = Router();

itemsRouter.get("/", itemController.itemsGet);

itemsRouter.get("/new", itemController.getForm);

itemsRouter.post("/new", itemController.postForm);

module.exports = itemsRouter;
