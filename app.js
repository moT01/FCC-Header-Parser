var express = require('express');
var useragent = require('useragent');
var ip = require('ip');

var app = express();

app.get('/', function(req, res) {
  res.json({
      "Software": (useragent.parse(req.headers['user-agent'])).toString(),
      "Language": req.acceptsLanguages(),
      "IP Address": ip.address()
  }); //end res.json
}); //end app.get

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});