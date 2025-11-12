const express = require("express");
const router = express.Router();

const st = require("../controller/student");
const user = require("../controller/user");

// ✅ Student routes
router.get("/getdata", st.getStudentdata);
router.post("/insertdata", st.insertStudentdata);
router.put("/updatedata/:id", st.updateStudentdata);
router.delete("/deletedata/:id", st.deleteStudentdata);

// ✅ User route (login)
router.post("/login", user.getUserdata);

module.exports = router;

