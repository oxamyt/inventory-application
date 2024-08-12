const { Router } = require("express");
const typeController = require("../controllers/typeController");

const typesRouter = Router();

typesRouter.get("/", typeController.typesGet);

typesRouter.get("/new", typeController.getForm);

typesRouter.post("/new", typeController.postForm);

module.exports = typesRouter;
