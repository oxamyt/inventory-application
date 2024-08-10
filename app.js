const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
