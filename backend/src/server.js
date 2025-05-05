const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { api } = require('./config');
const router = require('./routes');

const app = express();
const corsOption = {
    origin: '*',
    credentials: true,
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use(api, router);

module.exports = app;
