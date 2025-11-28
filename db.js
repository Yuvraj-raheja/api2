const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://rahejayuvraj24_db_user:fDtSH06WLoyfozyx@cluster1.et9ptoc.mongodb.net'
//const url = 'mongodb://localhost:27017';
let db;
const connectDB = async () => {
  if (db) return db;
  try {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Yuvrajdb"); // your database name
    
    console.log(" Connected to MongoDB Atlas");
    return db;
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
    throw err;
  }
};
module.exports = connectDB;