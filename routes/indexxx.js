const express = require("express");
const router = express.Router();
const st = require("../controller/student");

// Routes
router.get("/getdata", st.getStudentdata);
router.post("/insertdata", st.insertStudentdata);
router.put("/updatedata/:id", st.updateStudentdata);
router.delete("/deletedata/:id", st.deleteStudentdata);

module.exports = router;