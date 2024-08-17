const db = require("../db/queries");
require("dotenv").config();
const { validatePassword } = require("./validation");
const { validationResult } = require("express-validator");

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

async function getUpdateForm(req, res) {
  try {
    const manufacturerResult = await db.getById(req.params.id, "manufacturers");
    const manufacturer = manufacturerResult[0];
    res.render("manufacturerUpdateForm", {
      manufacturer: manufacturer,
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postUpdateForm(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  const { name, country, image_url } = req.body;

  if (!errors.isEmpty()) {
    return res.render("manufacturerUpdateForm", {
      manufacturer: {
        id: req.params.id,
        name,
        country,
        image_url,
      },
      errors: errors.array(),
    });
  }

  try {
    await db.updateManufacturers(req.params.id, name, country, image_url);

    res.redirect("/manufacturers");
  } catch (err) {
    console.error(err);
  }
}

async function getDeleteForm(req, res) {
  try {
    const manufacturerResult = await db.getById(req.params.id, "manufacturers");
    const manufacturer = manufacturerResult[0];
    res.render("deleteForm", {
      entity: manufacturer,
      path: "manufacturers",
      errors: [],
    });
  } catch (err) {
    console.error(err);
  }
}

async function postDeleteManufacturer(req, res) {
  await validatePassword[0].run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const manufacturerResult = await db.getById(req.params.id, "manufacturers");
    const manufacturer = manufacturerResult[0];
    return res.render("deleteForm", {
      entity: manufacturer,
      path: "manufacturers",
      errors: errors.array(),
    });
  }

  try {
    const id = req.params.id;
    await db.deleteById(id, "manufacturers");
    res.redirect("/manufacturers");
  } catch (err) {
    console.error(err);
  }
}

async function getItemsByManufacturer(req, res) {
  try {
    const manufacturer_id = req.params.id;
    const items = await db.getItemsByEntity(manufacturer_id, "manufacturer_id");
    const manufacturerResult = await db.getById(
      manufacturer_id,
      "manufacturers"
    );
    const manufacturer = manufacturerResult[0];
    res.render("genericList", {
      items,
      entityName: manufacturer.name,
      title: "Items by Manufacturer",
    });
  } catch (err) {
    console.error(error);
  }
}

module.exports = {
  manufacturersGet,
  getForm,
  postForm,
  getUpdateForm,
  postUpdateForm,
  postDeleteManufacturer,
  getDeleteForm,
  getItemsByManufacturer,
};
