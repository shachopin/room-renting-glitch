// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));
app.use(express.static('./'));

app.get("*", function (request, response) {
  response.sendFile(__dirname + '/index.html');
}); // I do this because without this, the bookmark for /apply or /gallery will fail due to 404, check LEARNING.md for more info


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
