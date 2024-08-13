const db = require("../db/queries");

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
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  try {
    const { name, description, image_url } = req.body;

    await db.updateCategories(req.params.id, name, description, image_url);

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
};
