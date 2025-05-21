const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const todoController = require('../controllers/todoscontroller')

// Create a user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get one user
router.get('/:id', userController.getUserById);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

// Create a todo for a specific user
router.post('/:userId/todos', todoController.createTodoForUser);

// Get all todos for a specific user
router.get('/:userId/todos', todoController.getTodosByUser);

module.exports = router;
