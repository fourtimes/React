var express = require("express");
var router = express.Router();
var writeSql = require("../config/writeSql");
var readSql = require("../config/readSql");

router.get("/", (req, res) => {
  res.send("Welcome to the login form");
});

router.get("/getLogin", (req, res) => {
  var query = `SELECT * FROM login`;
  readSql.query(query, (err, result, fields) => {
    if (err) res.status(400).json({ success: false, message: err.code });
    res.send({ success: true, message: "items showned!", result });
  });
});

router.post("/loginForm", (req, res, next) => {
  var queryOne = `SELECT * FROM login WHERE username ='${req.body.username}' AND password='${req.body.password}'`;
  console.log(queryOne);
  writeSql.query(queryOne, (error, results, fields) => {
    if (error) res.status(400).json({ success: false, message: error.code });
    res.send({
      success: true,
      message: "successfully logined!",
      results: results,
    });
  });
});

router.post("/loginRegistration", (req, res) => {
  var queryTwo = `INSERT INTO login (username, password) VALUES ('${req.body.username}','${req.body.password}')`;
  console.log(queryTwo);
  writeSql.query(queryTwo, (error, results, fields) => {
    if (error) res.status(400).json({ success: false, message: error.code });
    res.send({
      success: true,
      message: "successfully registrationed",
      results: results,
    });
  });
});
module.exports = router;
