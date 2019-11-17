const express = require("express");
const router = express.Router();
const todolist = require("./../db/mongoose");
const bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get("/", function(req, res, next) {
  todolist.list(function(data) {
    res.render("todolist", {todolist: data});
  })
});

router.post("/", urlencodedParser, function(req, res, next) {
  console.log(req.body)
  // res.send("hello")
  // app.use(bodyParser.json());
  todolist.save(req.body, function(result) {
    if (result) {
      res.send("成功");
    } else {
      res.send("失败");
    }
  })
});

module.exports = router;