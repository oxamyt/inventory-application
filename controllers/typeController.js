const db = require("../db/queries");

async function typesGet(req, res) {
  try {
    const types = await db.getTypes();
    res.render("types", { types: types });
  } catch (err) {
    console.error(err);
  }
}

async function getForm(req, res) {
  try {
    res.render("typesForm");
  } catch (err) {
    console.error(err);
  }
}

async function postForm(req, res) {
  const { name, description, image_url } = req.body;

  try {
    await db.insertTypes(name, description, image_url);

    res.redirect("/types");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  typesGet,
  getForm,
  postForm,
};
