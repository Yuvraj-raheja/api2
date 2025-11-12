const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const studentRoutes = require("./routes/indexxx"); // ✅ using your custom name

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // ✅ allow frontend

// Connect to MongoDB
connectDB();

// Register routes
app.use("/", studentRoutes);

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));