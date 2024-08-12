const { Router } = require("express");
const itemController = require("../controllers/itemController");

const itemsRouter = Router();

itemsRouter.get("/", itemController.itemsGet);

module.exports = itemsRouter;
