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

async function insertCategories(name, description, image_url) {
  const insertQuery =
    "INSERT INTO categories (name,description,image_url) VALUES ($1,$2,$3)";
  const values = [name, description, image_url];
  await pool.query(insertQuery, values);
}

async function insertManufacturers(name, country, image_url) {
  const insertQuery =
    "INSERT INTO manufacturers (name,country,image_url) VALUES ($1,$2,$3)";
  const values = [name, country, image_url];
  await pool.query(insertQuery, values);
}

async function updateItems(
  id,
  name,
  description,
  price,
  stock_quantity,
  category_id,
  manufacturer_id,
  type_id,
  image_url
) {
  const updateQuery = `
    UPDATE items
    SET name = $1, description = $2, price = $3, stock_quantity = $4, category_id = $5,
        manufacturer_id = $6, type_id = $7, image_url = $8
    WHERE id = $9
  `;
  const values = [
    name,
    description,
    price,
    stock_quantity,
    category_id,
    manufacturer_id,
    type_id,
    image_url,
    id,
  ];

  await pool.query(updateQuery, values);
}

module.exports = {
  getItems,
  getCategories,
  getManufacturers,
  getTypes,
  getFormData,
  insertItems,
  insertTypes,
  insertCategories,
  insertManufacturers,
  updateItems,
};
