const slist = require('../student.json');
const database = require('../database/db');
const getdata = async (req, res) => {
    try {
        const db = await database();
        const collection = db.collection('student');
        const result = await collection.find().toArray();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
};
const insertStudent = (req, res) => {
    try {
        console.log(req.body);
        const newdata = req.body;
        slist.push(newdata);
        res.send({
            "status": "data inserted successfully",
            "statuscode": 200,
            "data": newdata
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
const updateStudent = (req, res) => {
    try {
        slist.push(req.body);
        console.log(slist);
        res.send({
            "status": "data updated successfully",
            "statuscode": 200,
            "data": req.params.name
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
