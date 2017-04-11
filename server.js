var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');


var app = express();
var PORT = process.env.PORT || 3000;


//
// app.use(favicon(path.join(__dirname, 'dist/img', 'favicon.ico')));
//
//
//
app.use(express.static('dist'));
app.post('/sendEmail' , function(req, res) {
  //handle msg sent
  console.log(req.body);
  res.send('ok');
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(PORT, function(){
  console.log('server is up on port ' + PORT);
});
