const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Use any port (Render will assign its own PORT in production)
const port = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Sample GET route
app.get('/getdata', (req, res) => {
  const data = [
    { id: 1, name: "Yuvraj Raheja", age: 22 },
    { id: 2, name: "Sneha Gupta", age: 24 },
    { id: 3, name: "Rohit Sharma", age: 27 }
  ];
  res.json(data);
});

// ✅ Default route
app.get('/', (req, res) => {
  res.send('Server is running successfully 🚀');
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});