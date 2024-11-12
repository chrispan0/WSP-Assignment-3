// Import required modules
var express = require("express");
var router = express.Router();
var task = require("../model/task");
// Route to handle task creation
router.post("/create", async (req, res, next) => {
  try {
    // Destructure required fields from request body
    var { name, email, title, description, type, priority } = req.body;
    // Create a new task instance with provided details
    new_task = new task({
      task,
      notes,
      duedate,
    });
    // Save the new task to the database
    await new_task.save();
    // Redirect to the home page with a success indicator
    res.redirect("/?submitted=true");
  } catch {
    // Redirect to the home page with a failure indicator if an error occurs
    res.redirect("/?submitted=false");
  }
});
// Route to handle task editing
router.post("/edit", async (req, res, next) => {
  try {
    // Destructure required fields from request body
    var { id, task, notes, duedate } = req.body;
    // Find the task by ID and update its details
    await task.findByIdAndUpdate(id, {
      task,
      notes,
      duedate,
    });
    // Redirect to the management page with a success indicator
    res.redirect("/manage?edited=true");
  } catch {
    // Redirect to the management page with a failure indicator if an error occurs
    res.redirect("/manage?edited=false");
  }
});
// Route to handle task deletion
router.post("/delete", async (req, res, next) => {
  try {
    // Find the task by ID and delete it from the database
    await task.findByIdAndDelete(req.body.id);
    // Redirect to the management page with a success indicator
    res.redirect("/manage?deleted=true");
  } catch {
    // Redirect to the management page with a failure indicator if an error occurs
    res.redirect("/manage?deleted=false");
  }
});

module.exports = router;
