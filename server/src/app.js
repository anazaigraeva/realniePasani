const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const categoryRouter = require('./Routes/categoryRouter');
const wordRouter = require('./Routes/wordRouter');
const authRouter = require('./Routes/authRouter');
const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/category', categoryRouter);
app.use('/api/words', wordRouter);
app.use('/api/auth', authRouter);

module.exports = app;
