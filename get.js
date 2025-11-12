//const express = require('express');
//const cors = require('cors');
//const connectDB = require('./database/db');


//const app = express();
//const port = process.env.PORT || 3000;

//app.use(express.json());
//app.use(cors());

// ✅ Route to fetch data from MongoDB
//app.get('/getdata', async (req, res) => {
  //try {
    //const db = await connectDB();
    //const collection = db.collection('student'); // change to your collection name
    //const data = await collection.find().toArray();
    //res.json(data);
  //} catch (error) {
    //console.error('Error fetching data:', error);
    //res.status(500).json({ error: 'Internal Server Error' });
 // }
//});

//app.get('/', (req, res) => {
  //res.send('✅ Backend connected to MongoDB!');
//});

//app.listen(port, () => {
  //console.log(`✅ Server running on port ${port}`);
//});

const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Import routes
const indexRouter = require("./routes/indexxx");

// ✅ Use routes
app.use("/", indexRouter);

// ✅ Root check
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});