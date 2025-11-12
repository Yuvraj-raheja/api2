const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const indexRouter = require('./routes/indexxx');

// Use routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});