const database = require('../database/db');

const getUserdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('user');

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({
        status: "missing fields",
        statuscode: 400,
        message: "Username and password are required"
      });
    }

    // ✅ Find user by username
    const user = await collection.findOne({ username: username }); // 👈 make sure your MongoDB field is 'username'

    if (!user) {
      return res.status(404).send({
        status: "user not found",
        statuscode: 404,
        data: null
      });
    }

    if (user.password !== password) {
      return res.status(401).send({
        status: "invalid password",
        statuscode: 401,
        data: null
      });
    }

    // ✅ Login success
    res.status(200).send({
      status: "success",
      statuscode: 200,
      data: user
    });

  } catch (err) {
    console.error("❌ Error during login:", err);
    res.status(500).send({
      status: "error",
      statuscode: 500,
      message: err.message || err
    });
  }
};

module.exports = { getUserdata };