const express = require('express');
const morgan = require('morgan')

const categoryRouter = require('./Routes/categoryRouter');
const wordRouter = require('./Routes/wordRouter');
const app = express()

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/category', categoryRouter)
app.use('/api/words', wordRouter)

module.exports = app;
