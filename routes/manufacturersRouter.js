const { Router } = require("express");
const manufacturerController = require("../controllers/manufacturerController");

const manufacturersRouter = Router();

manufacturersRouter.get("/", manufacturerController.manufacturersGet);

module.exports = manufacturersRouter;
