const express = require('express');
const router = express.Router();
const todoController = require("../controllers/todoController");
const { checkAuthenticated } = require("../middleware/authMiddleware");

// View all todos
router.get("/", checkAuthenticated, todoController.getTodos);

// Create new todo
router.post("/create", checkAuthenticated, todoController.createTodo);

// Delete a todo
router.post("/delete/:id", checkAuthenticated, todoController.deleteTodo);

// Update a todo
router.post("/update/:id", checkAuthenticated, todoController.updateTodo);

module.exports = router;
