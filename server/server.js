var express = require('express');
var app = express();

app.use(express.static('../client/app'))

app.get('/', function (req, res) {
  console.log('test');
  res.json({ message: 'Welcome to the myChatApp\'s RESTful API!'});
  res.end();
});

module.exports = app;