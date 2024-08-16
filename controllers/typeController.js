const db = require("../db/queries");
require("dotenv").config();
const { validatePassword } = require("./validation");
const { validationResult } = require("express-validator");

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
    res.render("genericForm", {
      title: "Types Form",
      action: "types",
      buttonText: "Create Type",
    });
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
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const typeResult = await db.getById(req.params.id, "types");
    const type = typeResult[0];
    return res.render("typeUpdateForm", {
      type,
      errors: errors.array(),
    });
  }

  try {
    const { name, description, image_url } = req.body;

    await db.updateTypes(req.params.id, name, description, image_url);

    res.redirect("/types");
  } catch (err) {
    console.error(err);
  }
}

async function getDeleteForm(req, res) {
  try {
    const typeResult = await db.getById(req.params.id, "types");
    const type = typeResult[0];
    res.render("deleteForm", { entity: type, path: "types", errors: [] });
  } catch (err) {
    console.error(err);
  }
}

async function postDeleteType(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const typeResult = await db.getById(req.params.id, "types");
    const type = typeResult[0];
    return res.render("deleteForm", {
      entity: type,
      path: "types",
      errors: errors.array(),
    });
  }

  try {
    const id = req.params.id;
    await db.deleteById(id, "types");
    res.redirect("/types");
  } catch (err) {
    console.error(err);
  }
}

async function getItemsByType(req, res) {
  try {
    const typeId = req.params.id;
    const items = await db.getItemsByType(typeId);
    res.render("itemsByType", { items });
  } catch (err) {
    console.error(error);
  }
}

module.exports = {
  typesGet,
  getForm,
  postForm,
  getUpdateForm,
  postUpdateForm,
  postDeleteType,
  postDeleteType,
  getDeleteForm,
  getItemsByType,
};
