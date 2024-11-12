// MVC --> Model , View , Controller (Routers)
let mongoose = require("mongoose");
// create a model class
let taskModel = new mongoose.Schema({
  task: String,
  notes: String,
  duedate: String,
});
module.exports = mongoose.model("task", taskModel);
