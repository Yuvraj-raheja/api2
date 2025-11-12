const connectDB = require("../db");
const { ObjectId } = require("mongodb");

// Get all student data
exports.getStudentdata = async (req, res) => {
  try {
    const db = await connectDB();
    const data = await db.collection("students").find().toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Insert a new student
exports.insertStudentdata = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.collection("students").insertOne(req.body);
    res.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update student by ID
exports.updateStudentdata = async (req, res) => {
  try {
    const db = await connectDB();
    await db.collection("students").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete student by ID
exports.deleteStudentdata = async (req, res) => {
  try {
    const db = await connectDB();
    await db.collection("students").deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};