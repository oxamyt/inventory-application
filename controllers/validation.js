const { body } = require("express-validator");
require("dotenv").config();

const validatePassword = [
  body("password")
    .notEmpty()
    .withMessage("Admin password is required")
    .custom((value) => value === process.env.ADMIN_PASSWORD)
    .withMessage("Incorrect admin password"),
];

module.exports = { validatePassword };
