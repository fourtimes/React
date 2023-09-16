var express = require("express");
var writeSql = require("../config/writeSql");
var readSql = require("../config/readSql");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the registration form");
});

router.post("/registerLogin", (req, res, next) => {
  var queryOne = `INSERT INTO register (email, mobile_number) VALUES ('${req.body.email}','${req.body.mobile_number}')`;
  writeSql.query(queryOne, (error, results, fields) => {
    if (error) res.status(400).json({ success: false, message: error.code });
    res.send({
      success: true,
      message: "successfully register registrationed",
      results: results,
    });
  });
});

router.get("/getRegister", (req, res) => {
  var query = `SELECT * FROM register`;
  console.log(query);
  readSql.query(query, (err, result, fields) => {
    if (err) res.status(400).json({ success: false, message: err.code });
    res.send({
      success: true,
      message: "register details successfully showned",
      results: result,
    });
  });
});

module.exports = router;
