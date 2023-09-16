const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
var morgan = require("morgan");

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan("combined"));
app.use("/site", express.static("static"));

const register = require("./route/register");
const login = require("./route/login");

app.use("/register", register);
app.use("/login", login);

app.get("/", (req, res, next) => {
  res.send("Welcome to Smart Remittance RestApi");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
