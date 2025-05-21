const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoscontroller');



// Get all todos
router.get('/', todoController.getAllTodos);


// Get a specific todo
router.get('/:id', todoController.getTodoById);

// Update a todo
router.put('/:id', todoController.updateTodo);

// Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
