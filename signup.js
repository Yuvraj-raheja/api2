const database = require('../database/db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yuvrajraheja25@gmail.com',
        pass: 'vhfsoxtquwpiegyu'
    }
});

const signup = async (req, res) => {
    try {
        console.log(req.body);

        const db = await database();
        const collection = db.collection('user');

        // 👇 Save the result in a variable
        const insertedUser = await collection.insertOne(req.body);

        // 👇 Check proper variable + no typo
        if (insertedUser.acknowledged === true) {
            
            const mailOptions = {
                from: 'yuvrajraheja25@gmail.com',
                to: req.body.email,
                subject: 'Welcome to our app',
                text: 'Thank you for signing up to our app'
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            console.log("User signed up successfully");
        }

        res.send({
            status: "User signed up successfully",
            statuscode: 200,
            data: req.body
        });

    } catch (err) {
        res.status(500).send({
            status: "user signed up failed",
            statuscode: 500,
            data: err.message
        });
    }
};

module.exports = { signup };
