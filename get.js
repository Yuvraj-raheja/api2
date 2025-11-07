const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/indexxx');
app.use('/', indexRouter);
app.listen(port, () => {
    console.log("Server is running on port 3000");
});
