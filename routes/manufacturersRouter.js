const { Router } = require("express");
const manufacturerController = require("../controllers/manufacturerController");

const manufacturersRouter = Router();

manufacturersRouter.get("/", manufacturerController.manufacturersGet);

manufacturersRouter.get("/new", manufacturerController.getForm);

manufacturersRouter.post("/new", manufacturerController.postForm);

module.exports = manufacturersRouter;
