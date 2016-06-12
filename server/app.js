//Allows express to be allowed into the program
var express = require('express');
//switched the express call to app making it easier to use thorughout the program
var app = express();
//takes care of path configurations that could cause trouble later on
var path = require('path');
//allows you to use .Post to send information to the Server
var bodyParser = require('body-parser');
//allows you to be able to encode the address of the website if need be
//also needed for .post commands
var urlencodedParser = bodyParser.urlencoded({extended:false});
//goes to the modules calc folder to bring out the calculation needed for server side
var answer = require('../modules/calc.js');
//Allows the server to open up and open at the same port as 8080 or a different server
//that is given to the program
var server = app.listen(process.env.PORT || 8080, function () {
  console.log('Server listening on 8080');
});
//The very start of the program where everything comes together
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});
//goes to the next website to show what you inserted into the equation and gives you a
//answer along with a print out of what you plugged in at the very beginning
app.post('/calculation', urlencodedParser, function(req, res){
  res.send(req.body.first + " " + req.body.math + " " + req.body.second + " = " + answer(req.body.first, req.body.second, req.body.math));
});
//allows you to see into the public folder without having a problem or path problems
app.use(express.static('public'));
