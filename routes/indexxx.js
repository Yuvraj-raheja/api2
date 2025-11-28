const express = require("express");
const router = express.Router();

const st = require("../controller/student");
const user = require("../controller/user");
const signup = require("../controller/signup");

// ✅ Student routes
/**
 * @swagger
 * /student:
 *   post:
 *     summary: Get all students (Token required)
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: List of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       401:
 *         description: Invalid token
 *       500:
 *         description: Server error
 */
router.get("/getdata", st.getStudentdata);
/**
 * @swagger
 * /student/insert:
 *   post:
 *     summary: Insert a new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Student inserted successfully
 *       500:
 *         description: Insert failed
 */
router.post("/insertdata", st.insertStudentdata);
/**
 * @swagger
 * /student/update/{id}:
 *   put:
 *     summary: Update student data
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       500:
 *         description: Update failed
 */
router.put("/updatedata/:id", st.updateStudentdata);
/**
 * @swagger
 * /student/delete/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       500:
 *         description: Delete failed
 */
router.delete("/deletedata/:id", st.deleteStudentdata);

// ✅ User route (login)
/**
 * @swagger
 * components:
 *   schemas:
 *     UserSignup:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: Yuvraj Raheja
 *         email:
 *           type: string
 *           example: yuvrajraheja25@gmail.com
 *         password:
 *           type: string
 *           example: myStrongPassword123
 *         phone:
 *           type: string
 *           example: 9876543210
 */
router.post("/login", user.getUserdata);
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user and send welcome email
 *     tags: [Authentication]
 *     description: This API registers a new user and sends a welcome email using Nodemailer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       200:
 *         description: User signed up successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: User signed up successfully
 *                 statuscode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   $ref: '#/components/schemas/UserSignup'
 *       500:
 *         description: Failed to signup user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: user signed up failed
 *                 statuscode:
 *                   type: integer
 *                   example: 500
 *                 error:
 *                   type: string
 */
router.get("/signup", signup.signup);
router.get('/homepage',(req,res)=>{
const student={
  id:1,
  name:"John",
  age:20,
  city:"New York"
}
  res.render('home',{student});
});

module.exports = router;

