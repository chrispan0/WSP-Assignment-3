// Mongoose schema definition for Task model with fields for task, notes, and due date
let mongoose = require("mongoose");
let taskSchema = new mongoose.Schema({
  task: String,
  notes: String,
  duedate: String,
});
module.exports = mongoose.model("Task", taskSchema);
