var express = require('express');
var useragent = require('useragent');
//var ip = require('ip');

var app = express();

app.get('/', function(req, res) {
    var ip = (req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress).split(",")[0];

  res.json({
      "Software": (useragent.parse(req.headers['user-agent'])).toString(),
      "Language": req.acceptsLanguages(),
      "IP Address": ip
  }); //end res.json
}); //end app.get

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});