const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const itemsRouter = require("./routes/itemsRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const typesRouter = require("./routes/typesRouter");
const manufacturersRouter = require("./routes/manufacturersRouter");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);
app.use("/types", typesRouter);
app.use("/manufacturers", manufacturersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
