const db = require("../db/queries");

async function itemsGet(req, res) {
  try {
    const items = await db.getItems();
    res.render("items", { items: items });
  } catch (err) {
    console.error(err);
  }
}
