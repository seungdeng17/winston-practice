const express = require('express');
const logger = require('./loggers/login');

const app = express();

app.get("/", (req, res) => {
    logger.info('write log')
    res.json({
        hello: "logger test"
    })
})

app.get("/log", (req, res) => {
    const { type, date } = req.query;
    res.status(200).sendFile(__dirname + `/logs/${type}/${date}.log`);
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
