const send_email = require('./send_email');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
  extended: true
}));

const basedir = path.join(__dirname, 'www.calteksolutions.com');

app.use(express.static(basedir));

app.post('/contact-me.html', (req, res) => {

  console.log(req.body);

  const message = JSON.stringify(req.body, null, 2)
  const recipients = "andrew@dirksen.com, nahumamaciel@gmail.com"

  send_email(message, recipients)
    .then(() => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end("Thank you for contacting us! You can expect a response in 48-72 hours.")
    }, err => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end("Oops, looks like that didn't work. Sorry about that. Please contact me by email, and I will get back to you as soon as possible.")
    })
});

port = 3000;
app.listen(port);
console.log("Webserver Listening on port " + port)
