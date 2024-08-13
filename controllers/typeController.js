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

async function getUpdateForm(req, res) {
  try {
    const typeResult = await db.getById(req.params.id, "types");
    const type = typeResult[0];
    res.render("typeUpdateForm", {
      type: type,
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  try {
    const { name, description, image_url } = req.body;

    await db.updateTypes(req.params.id, name, description, image_url);

    res.redirect("/types");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  typesGet,
  getForm,
  postForm,
  getUpdateForm,
  postUpdateForm,
};
