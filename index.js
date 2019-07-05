const express = require('express');
const app = express();

const recent = [];

app.get('/', function (req, res) {
    const ipAddress = req.ip;
    const index = recent.findIndex(addr => addr === ipAddress);
    if (index >= 0) {
        recent.splice(index, 1);
    }
    if (ipAddress !== "localhost" && ipAddress !== "127.0.0.1") {
        recent.unshift(ipAddress);
    }
    res.json(recent);
});

app.listen(80, '0.0.0.0');
