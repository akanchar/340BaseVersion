const createError = require('http-errors');
const express = require('express');
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const router = express.Router();

const indexRouter = require('./routes/index');
const getQueryResults = require('./routes/getQueryResults');

let app = express();

// view engine setup
app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// app.set('/', indexRouter);

app.use('/', indexRouter);
app.use('/getQueryResults', getQueryResults);
// Add more paths to more pages!

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(bodyParser.urlencoded({
    extended: true
}));
// This responds a POST request for the homepage
module.exports = app;
app.listen(port, () =>
    console.log(`Example app listening on port http://localhost:${port}/`)
);