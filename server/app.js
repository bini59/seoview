const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../client/build')));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};

app.use(cors(corsOptions));

const apiRouter = require('./routes/apis');
app.use('/api', apiRouter);



app.use((req, res, next) => {
    next(createError(404));
})
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') == 'development' ? err : {};
    res.status(err.status || 500);
    // -> error.html로 변경해서 보낼것...
    res.send(err);
});

app.listen(3001, () => {
    console.log('Express App on port 3001!');
});