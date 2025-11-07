const database = require('../database/db');
const getStudentdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('student');
    const result = await collection.find().toArray(); // ✅ FIXED: call find() before toArray()
    res.send(result);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    res.status(500).send({ error: "Failed to fetch student data" });
  }
};

const insertStudentdata = async (req, res) => {
  try {
    console.log("🟢 Inserting data:", req.body);
    const db = await database();
    const collection = db.collection('student');
    const result = await collection.insertOne(req.body);
    res.send(result);
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    res.status(500).send({ error: "Failed to insert student data" });
  }
};
const { ObjectId } = require('mongodb');
const deleteStudentdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('student');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send(result);
  } catch (err) {
    console.error("❌ Error deleting data:", err);
    res.status(500).send({ error: "Failed to delete student data" });
  }
};

const updateStudentdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('student');
    const id = req.params.id;
    const updatedData = req.body;
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getStudentdata, insertStudentdata, deleteStudentdata, updateStudentdata };