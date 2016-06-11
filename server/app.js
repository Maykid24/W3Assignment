var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var answer = require('../modules/calc.js');
var btn = require('../modules/restart.js');

var server = app.listen(process.env.PORT || 8080, function () {
  console.log('Server listening on 8080');
});

app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/calculation', urlencodedParser, function(req, res){
  res.write(req.body.first + " " + req.body.math + " " + req.body.second + " = " + answer(req.body.first, req.body.second, req.body.math));
  res.write(btn);
  res.end();
});

app.use(express.static('public'));
