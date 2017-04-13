var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser= require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
var PORT = process.env.PORT || 3000;
require('dotenv').config();
//nodemailer configuration]
let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'andreixoc@hotmail.com',
        pass: process.env.EMAIL_PASS
    }
});



app.use(favicon(path.join(__dirname, 'dist/img', 'favicon.ico')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.post('/sendEmail' , function(req, res) {
  //handle msg sent
  let mailOptions = {
    from: '"'+req.body.name+' " <'+req.body.email+'>', // sender address
    to: 'andreixoc@hotmail.com', // list of receivers
    subject: 'Message from your site ✔', // Subject line
    text: `you received a message from ${req.body.name} at ${req.body.email}, this is the  message: ${req.body.msg}`,
    html: `<div>
      <h1>Email from your site</h1>
      <p>From: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Message: ${req.body.msg}</p>
    </div>`
};
console.log(mailOptions);
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
        res.sendStatus(404);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.send('ok');
});
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(PORT, function(){
  console.log('server is up on port ' + PORT);
});
