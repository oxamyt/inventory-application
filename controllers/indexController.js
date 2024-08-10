async function inventoryPageGet(req, res) {
  try {
    res.render("inventory");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  inventoryPageGet,
};
