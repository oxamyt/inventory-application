const db = require("../db/queries");
require("dotenv").config();
const { validatePassword } = require("./validation");
const { validationResult } = require("express-validator");

async function categoriesGet(req, res) {
  try {
    const categories = await db.getEntities("categories");
    res.render("genericEntitiesList", {
      entities: categories,
      label: "Category",
      action: "categories",
    });
  } catch (err) {
    console.error(err);
  }
}

async function getForm(req, res) {
  try {
    res.render("genericForm", {
      title: "Categories Form",
      action: "categories",
      buttonText: "Create Category",
    });
  } catch (err) {
    console.error(err);
  }
}

async function postForm(req, res) {
  const { name, description, image_url } = req.body;

  try {
    await db.insertCategories(name, description, image_url);
    res.redirect("/categories");
  } catch (err) {
    console.error(err);
  }
}

async function getUpdateForm(req, res) {
  try {
    const categoryResult = await db.getById(req.params.id, "categories");
    const category = categoryResult[0];
    res.render("genericUpdateForm", {
      entity: category,
      action: "categories",
      buttonText: "Update Category",
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  const { name, description, image_url } = req.body;

  if (!errors.isEmpty()) {
    return res.render("genericUpdateForm", {
      entity: { id: req.params.id, name, description, image_url },
      action: "categories",
      buttonText: "Update Category",
      errors: errors.array(),
    });
  }

  try {
    await db.updateCategories(req.params.id, name, description, image_url);

    res.redirect("/categories");
  } catch (err) {
    console.error(err);
  }
}

async function getDeleteForm(req, res) {
  try {
    const categoryResult = await db.getById(req.params.id, "categories");
    const category = categoryResult[0];
    res.render("deleteForm", {
      entity: category,
      path: "categories",
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postDeleteCategory(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const categoryResult = await db.getById(req.params.id, "categories");
    const category = categoryResult[0];
    return res.render("deleteForm", {
      entity: category,
      path: "categories",
      errors: errors.array(),
    });
  }

  try {
    const id = req.params.id;
    await db.deleteById(id, "categories");
    res.redirect("/categories");
  } catch (err) {
    console.error(err);
  }
}

async function getItemsByCategory(req, res) {
  try {
    const category_id = req.params.id;
    const items = await db.getItemsByEntity(category_id, "category_id");
    const categoryResult = await db.getById(category_id, "categories");
    const category = categoryResult[0];
    res.render("genericList", {
      items,
      entityName: category.name,
      title: "Items by Category",
    });
  } catch (err) {
    console.error(error);
  }
}

module.exports = {
  categoriesGet,
  getForm,
  postForm,
  getUpdateForm,
  postUpdateForm,
  postDeleteCategory,
  getDeleteForm,
  getItemsByCategory,
};
