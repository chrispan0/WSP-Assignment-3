let mongoose = require("mongoose");
let taskSchema = new mongoose.Schema({
  task: String,
  notes: String,
  duedate: String,
});
module.exports = mongoose.model("Task", taskSchema);
