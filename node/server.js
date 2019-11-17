const express = require("express");
// const todolist = require("./db/mongoose");
const todolistRouter = require("./routes/todolist");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({extend: false}));
app.use(express.static("./assets"));
app.use(todolistRouter);
// app.get("/", function(req, res, next) {
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   todolist.list(function(data) {
//     console.log("1111111111111111111111");
//     console.log(data)
//     res.render("todolist", data);
//   })
// });
app.listen(3000);