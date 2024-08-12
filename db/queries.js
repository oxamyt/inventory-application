const pool = require("./pool");

async function getItems() {
  const getQuery = "SELECT * FROM items";
  const { rows } = await pool.query(getQuery);
  return rows;
}

async function getCategories() {
  const getQuery = "SELECT * FROM categories";
  const { rows } = await pool.query(getQuery);
  return rows;
}

async function getManufacturers() {
  const getQuery = "SELECT * FROM manufacturers";
  const { rows } = await pool.query(getQuery);
  return rows;
}

async function getTypes() {
  const getQuery = "SELECT * FROM types";
  const { rows } = await pool.query(getQuery);
  return rows;
}

async function getFormData() {
  const categories = await pool.query("SELECT id, name FROM categories");
  const manufacturers = await pool.query("SELECT id, name FROM manufacturers");
  const types = await pool.query("SELECT id, name FROM types");

  return { categories, manufacturers, types };
}

async function insertItems(
  name,
  description,
  price,
  stock_quantity,
  category_id,
  manufacturer_id,
  type_id,
  image_url
) {
  const insertQuery =
    "INSERT INTO items (name, description, price, stock_quantity, category_id, manufacturer_id, type_id,image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
  const values = [
    name,
    description,
    price,
    stock_quantity,
    category_id,
    manufacturer_id,
    type_id,
    image_url,
  ];
  await pool.query(insertQuery, values);
}

async function insertTypes(name, description, image_url) {
  const insertQuery =
    "INSERT INTO types (name,description,image_url) VALUES($1,$2,$3)";
  const values = [name, description, image_url];
  await pool.query(insertQuery, values);
}

module.exports = {
  getItems,
  getCategories,
  getManufacturers,
  getTypes,
  getFormData,
  insertItems,
  insertTypes,
};
