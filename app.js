import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(require('./server/routers'));

mongoose.connect('mongodb://localhost:27017/ttms');

app.use(express.static(__dirname + '/public'));

app.use('*', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, function () {
    console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

module.exports = app;