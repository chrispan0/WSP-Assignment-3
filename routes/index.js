// Import required modules
var express = require("express");
var router = express.Router();
var crypto = require("crypto");
var Task = require("../model/task"); // Ensure model is imported as Task

// Route to render the home page
router.get("/", function (req, res, next) {
  if (req.query.submitted == "true") {
    res.render("index", { title: "Chris's To-Do List", submitted: true });
  } else if (req.query.submitted == "false") {
    res.render("index", { title: "Chris's To-Do List", submitted: false });
  } else {
    res.render("index", { title: "Chris's To-Do List" });
  }
});

// Route to render the Task Creator page
router.get("/editor", async (req, res, next) => {
  try {
    // Use Task (the model) here consistently
    let foundTask = await Task.findById(req.query.id);
    if (foundTask) {
      res.render("editor", { title: "Task Creator", task: foundTask });
    } else {
      res.render("editor", { title: "Task Creator" });
    }
  } catch (error) {
    console.error(error);
    res.render("editor", { title: "Task Creator", error: error.message });
  }
});

// Route to render the Manage task page
router.get("/manage", async (req, res, next) => {
  // Fetch all tasks from the database
  const task_list = await Task.find(); // Use Task here as well
  // Check the 'edited' and 'deleted' query parameters to determine the render state
  if (req.query.edited == "true") {
    res.render("manage", {
      title: "Manage task",
      task_list: task_list,
      edited: true,
    });
  } else if (req.query.edited == "false") {
    res.render("manage", {
      title: "Manage task",
      task_list: task_list,
      edited: false,
    });
  } else if (req.query.deleted == "true") {
    res.render("manage", {
      title: "Manage task",
      task_list: task_list,
      deleted: true,
    });
  } else if (req.query.deleted == "false") {
    res.render("manage", {
      title: "Manage task",
      task_list: task_list,
      deleted: false,
    });
  } else {
    res.render("manage", {
      title: "Manage task",
      task_list: task_list,
    });
  }
});

module.exports = router;
