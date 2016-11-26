var app = require('./server.js');
var port = process.env.port || 3000;

app.listen(port, function () {
  console.log('myChatApp\'s RESTful API listening on port ' + port);
});
