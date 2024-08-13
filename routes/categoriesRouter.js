const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoriesRouter = Router();

categoriesRouter.get("/", categoryController.categoriesGet);

categoriesRouter.get("/new", categoryController.getForm);

categoriesRouter.post("/new", categoryController.postForm);

module.exports = categoriesRouter;
