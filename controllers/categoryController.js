const db = require("../db/queries");
require("dotenv").config();
const { validatePassword } = require("./validation");
const { validationResult } = require("express-validator");

async function categoriesGet(req, res) {
  try {
    const categories = await db.getCategories();
    res.render("categories", { categories: categories });
  } catch (err) {
    console.error(err);
  }
}

async function getForm(req, res) {
  try {
    res.render("categoriesForm");
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
    res.render("categoryUpdateForm", {
      category: category,
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const categoryResult = await db.getById(req.params.id, "categories");
    const category = categoryResult[0];
    return res.render("categoryUpdateForm", {
      category,
      errors: errors.array(),
    });
  }

  try {
    const { name, description, image_url } = req.body;

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

module.exports = {
  categoriesGet,
  getForm,
  postForm,
  getUpdateForm,
  postUpdateForm,
  postDeleteCategory,
  getDeleteForm,
};
