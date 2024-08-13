const { Router } = require("express");
const manufacturerController = require("../controllers/manufacturerController");

const manufacturersRouter = Router();

manufacturersRouter.get("/", manufacturerController.manufacturersGet);

manufacturersRouter.get("/new", manufacturerController.getForm);

manufacturersRouter.post("/new", manufacturerController.postForm);

manufacturersRouter.get("/:id/edit", manufacturerController.getUpdateForm);

manufacturersRouter.post("/:id/edit", manufacturerController.postUpdateForm);

module.exports = manufacturersRouter;
