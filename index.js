const User = require('./usermodel');
const Todo = require('./todosmodel');

// Define associations here
User.hasMany(Todo, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Todo.belongsTo(User, {
  foreignKey: 'userId',
});

// Export models
module.exports = {
  User,
  Todo,
};
