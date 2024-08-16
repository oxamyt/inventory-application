const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoriesRouter = Router();

categoriesRouter.get("/", categoryController.categoriesGet);

categoriesRouter.get("/new", categoryController.getForm);

categoriesRouter.post("/new", categoryController.postForm);

categoriesRouter.get("/:id/edit", categoryController.getUpdateForm);

categoriesRouter.post("/:id/edit", categoryController.postUpdateForm);

categoriesRouter.get("/:id/delete", categoryController.getDeleteForm);

categoriesRouter.post("/:id/delete", categoryController.postDeleteCategory);

categoriesRouter.get("/:id", categoryController.getItemsByCategory);

module.exports = categoriesRouter;
