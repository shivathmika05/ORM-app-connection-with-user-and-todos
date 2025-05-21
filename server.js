const express = require('express');
const app = express();
const sequelize = require('./models/db'); // your Sequelize instance
const userRoutes = require('./routes/userroutes');
const todoRoutes = require('./routes/todosroutes');

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// Sync DB and start server
sequelize.sync({ force: false }) // use force: true to reset tables during development
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
