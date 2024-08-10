const pool = require("./pool");

async function getItems() {
  const getQuery = "SELECT * FROM items";
  const { rows } = await pool.query(getQuery);
  return rows;
}

module.exports = { getItems };
