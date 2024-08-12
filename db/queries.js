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

module.exports = {
  getItems,
  getCategories,
  getManufacturers,
  getTypes,
  getFormData,
};
