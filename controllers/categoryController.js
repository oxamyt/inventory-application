const db = require("../db/queries");

async function categoriesGet(req, res) {
  try {
    const categories = await db.getCategories();
    res.render("categories", { categories: categories });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { categoriesGet };
