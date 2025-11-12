const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Import routes
const indexRouter = require('./routes/indexxx');

// Use routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});