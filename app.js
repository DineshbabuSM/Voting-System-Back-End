const express = require('express');
const app = express();
const votingRoute = require('./routes/voting-route');
const pollingRoute = require('./routes/polling-route');
const cors = require('cors');

var corsOptions = {
    origin: 'https://dineshbabusm.github.io/voting-system/',
    methods: 'GET, POST, PUT, PATCH, DELETE, HEAD',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/partyList', votingRoute);
app.use('/polling', pollingRoute);


module.exports = app;
