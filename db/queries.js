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

module.exports = { getItems, getCategories, getManufacturers, getTypes };
