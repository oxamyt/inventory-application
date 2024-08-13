const db = require("../db/queries");

async function manufacturersGet(req, res) {
  try {
    const manufacturers = await db.getManufacturers();
    res.render("manufacturers", { manufacturers: manufacturers });
  } catch (err) {
    console.error(err);
  }
}

async function getForm(req, res) {
  try {
    res.render("manufacturersForm");
  } catch (err) {
    console.error(err);
  }
}

async function postForm(req, res) {
  const { name, country, image_url } = req.body;

  try {
    await db.insertManufacturers(name, country, image_url);

    res.redirect("/manufacturers");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  manufacturersGet,
  getForm,
  postForm,
};
