import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));

app.use('*', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(8080, function () {
    console.log('server started at http://localhost:8080'); // eslint-disable-line no-console
});

module.exports = app;