// Import required modules
var express = require("express");
var router = express.Router();
var Task = require("../model/task"); // Renamed to Task for consistency

// Route to handle task creation
router.post("/create", async (req, res, next) => {
  try {
    // Destructure the fields needed for creating a new task
    var { task, notes, duedate } = req.body;

    // Create a new Task instance with provided details
    let new_task = new Task({
      task,
      notes,
      duedate,
    });

    // Save the new task to the database
    await new_task.save();

    // Redirect to the home page with a success indicator
    res.redirect("/?submitted=true");
  } catch (error) {
    console.error(error); // Log error for debugging
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
    await Task.findByIdAndUpdate(id, {
      task,
      notes,
      duedate,
    });

    // Redirect to the management page with a success indicator
    res.redirect("/manage?edited=true");
  } catch (error) {
    console.error(error); // Log error for debugging
    // Redirect to the management page with a failure indicator if an error occurs
    res.redirect("/manage?edited=false");
  }
});

// Route to handle task deletion
router.post("/delete", async (req, res, next) => {
  try {
    // Find the task by ID and delete it from the database
    await Task.findByIdAndDelete(req.body.id);

    // Redirect to the management page with a success indicator
    res.redirect("/manage?deleted=true");
  } catch (error) {
    console.error(error); // Log error for debugging
    // Redirect to the management page with a failure indicator if an error occurs
    res.redirect("/manage?deleted=false");
  }
});

module.exports = router;
