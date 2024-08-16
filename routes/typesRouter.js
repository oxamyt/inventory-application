const { Router } = require("express");
const typeController = require("../controllers/typeController");

const typesRouter = Router();

typesRouter.get("/", typeController.typesGet);

typesRouter.get("/new", typeController.getForm);

typesRouter.post("/new", typeController.postForm);

typesRouter.get("/:id/edit", typeController.getUpdateForm);

typesRouter.post("/:id/edit", typeController.postUpdateForm);

typesRouter.get("/:id/delete", typeController.getDeleteForm);

typesRouter.post("/:id/delete", typeController.postDeleteType);

typesRouter.get("/:id", typeController.getItemsByType);

module.exports = typesRouter;
