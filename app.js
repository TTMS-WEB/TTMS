import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import regRouter from './server/routers/regRouter';
import bodyParser from 'body-parser';
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

regRouter(app);

mongoose.connect('mongodb://localhost:27017/ttms');

app.use(express.static(__dirname + '/public'));

app.use('*', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, function () {
    console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

module.exports = app;