const db = require("../db/queries");

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

module.exports = {
  itemsGet,
  getForm,
  postForm,
};
