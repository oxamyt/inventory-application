const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoriesRouter = Router();

categoriesRouter.get("/", categoryController.categoriesGet);

categoriesRouter.get("/new", categoryController.getForm);

categoriesRouter.post("/new", categoryController.postForm);

categoriesRouter.get("/:id/edit", categoryController.getUpdateForm);

categoriesRouter.post("/:id/edit", categoryController.postUpdateForm);

module.exports = categoriesRouter;
