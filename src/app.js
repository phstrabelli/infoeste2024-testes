const express = require('express');
const userRouter = require('./routes/user');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use(error);

module.exports = app;
