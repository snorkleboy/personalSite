var express = require('express');
var app = express();
var path = require('path');

let port = process.env.PORT || 3000;
// Define the port to run on
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  port = server.address().port;
  console.log('listening on ' + port);
});

