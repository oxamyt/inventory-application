const { Router } = require("express");
const typeController = require("../controllers/typeController");

const typesRouter = Router();

typesRouter.get("/", typeController.typesGet);

module.exports = typesRouter;
