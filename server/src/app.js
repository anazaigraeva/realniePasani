const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const userRouter = require('./Routes/userRouter')
const categoryRouter = require('./Routes/categoryRouter');
const wordRouter = require('./Routes/wordRouter');
const authRouter = require('./Routes/authRouter');
const likesRouter = require('./Routes/likesRouter');
const aiRouter = require('./Routes/chatRouter');

// const wordCategRouter = require('./Routes/wordCategRouter');
const chatRouter = require('./Routes/chatRouter');
const app = express()


app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use('/api/category', categoryRouter)
app.use('/api/words', wordRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter);
app.use('/api/likes', likesRouter);
app.use('/api/ai', aiRouter );

module.exports = app;
