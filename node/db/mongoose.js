// 1. 引入mongoose
const mongoose = require("mongoose");

// 2. 连接数据库
// 无密码连接
mongoose.connect("mongodb://127.0.0.1:27017/todolist");
// 有密码连接
// mongoose.connect("mongodb://name:password@localhost:27017/todolist");

// 3. 定义模型，即数据库表字段类型
const todolistSchema = mongoose.Schema({
  deleted: Number,
  progressType: String, // 0:待办，1：进行中，2：测试中，3：待合并，4：已完成，5：已关闭
  classification: String,
  name: String,
  desc: String
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}});

// 4. 建立表与模型的对应关系
// 第一个参数：第一个字母大写；将会与数据库中的TodoLists对应
// 第三个参数：指定数据库表名称
const todolist = mongoose.model("TodoList", todolistSchema);

// // 5. 查询表
// todolist.find({}, function(err, data) {
//   if (err) {
//     console.log("发生错误：" + err);
//   } else {
//     console.log(data);
//   }
// })
// // 6. 插入数据
// new todolist({
//   name: "赊销控货",
//   desc: "放啊",
//   createdDate: new Date(),
//   deleted: 0
// }).save();

module.exports = {
  list: function(fun) {
    todolist.find({}, function(err, data) {
      if (err) {
        console.log("发生错误：" + err);
      } else {
        fun(data);
      }
    })
  },
  save: function(data, fun) {
    const todo = new todolist({
      name: data.name,
      progressType: data.progressType,
      classification: data.classification,
      desc: data.desc
    });
    todo.save(function(err) {
      if (err) {
        fun(false);
      } else {
        fun(true);
      }
    })
  }
}