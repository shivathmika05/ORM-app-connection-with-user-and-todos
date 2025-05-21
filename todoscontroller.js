const { Todo, User } = require('../models'); // adjust path as needed

// Create a new todo for a specific user
exports.createTodoForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { task, is_complete } = req.body;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const todo = await Todo.create({ task, is_complete, userId });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ include: User });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get todos for a specific user
exports.getTodosByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: Todo
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.Todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id, { include: User });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const [updated] = await Todo.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
