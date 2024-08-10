const db = require("../db/queries");

async function manufacturersGet(req, res) {
  try {
    const manufacturers = await db.getManufacturers();
    res.render("manufacturers", { manufacturers: manufacturers });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  manufacturersGet,
};
