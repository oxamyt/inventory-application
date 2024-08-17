const db = require("../db/queries");
require("dotenv").config();
const { validatePassword } = require("./validation");
const { validationResult } = require("express-validator");

async function itemsGet(req, res) {
  try {
    const items = await db.getItems();
    res.render("items", { items: items });
  } catch (err) {
    console.error(err);
  }
}

async function getForm(req, res) {
  try {
    const { categories, manufacturers, types } = await db.getFormData();
    res.render("itemsForm", {
      categories: categories.rows,
      manufacturers: manufacturers.rows,
      types: types.rows,
    });
  } catch (err) {
    console.error(err);
  }
}

async function postForm(req, res) {
  const {
    name,
    description,
    price,
    stock_quantity,
    category_id,
    manufacturer_id,
    type_id,
    image_url,
  } = req.body;

  try {
    await db.insertItems(
      name,
      description,
      price,
      stock_quantity,
      category_id,
      manufacturer_id,
      type_id,
      image_url
    );

    res.redirect("/items");
  } catch (err) {
    console.error(err);
  }
}

async function getUpdateForm(req, res) {
  try {
    const itemResult = await db.getById(req.params.id, "items");
    const item = itemResult[0];
    const { categories, manufacturers, types } = await db.getFormData();
    res.render("itemUpdateForm", {
      item,
      categories: categories.rows,
      manufacturers: manufacturers.rows,
      types: types.rows,
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  const {
    name,
    description,
    price,
    stock_quantity,
    category_id,
    manufacturer_id,
    type_id,
    image_url,
  } = req.body;

  if (!errors.isEmpty()) {
    const { categories, manufacturers, types } = await db.getFormData();
    return res.render("itemUpdateForm", {
      item: {
        id: req.params.id,
        name,
        description,
        price,
        stock_quantity,
        category_id,
        manufacturer_id,
        type_id,
        image_url,
      },
      categories: categories.rows,
      manufacturers: manufacturers.rows,
      types: types.rows,
      errors: errors.array(),
    });
  }

  try {
    await db.updateItems(
      req.params.id,
      name,
      description,
      price,
      stock_quantity,
      category_id,
      manufacturer_id,
      type_id,
      image_url
    );

    res.redirect("/items");
  } catch (err) {
    console.error(err);
  }
}

async function getDeleteForm(req, res) {
  try {
    const itemResult = await db.getById(req.params.id, "items");
    const item = itemResult[0];
    res.render("deleteForm", { entity: item, path: "items", errors: [] });
  } catch (err) {
    console.error(err);
  }
}

async function postDeleteItem(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const itemResult = await db.getById(req.params.id, "items");
    const item = itemResult[0];
    return res.render("deleteForm", {
      entity: item,
      path: "items",
      errors: errors.array(),
    });
  }

  try {
    const id = req.params.id;
    await db.deleteById(id, "items");
    res.redirect("/items");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  itemsGet,
  getForm,
  postForm,
  getUpdateForm,
  postUpdateForm,
  postDeleteItem,
  getDeleteForm,
};
