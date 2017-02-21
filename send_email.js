const email = require('emailjs')
const password = require('./password')

const server = email.server.connect({
  user: "ctsmailerbot@gmail.com",
  password: password,
  host: "smtp.gmail.com",
  ssl: true
})

module.exports = function(text, address) {
  return new Promise((resolve, reject) => {

    // send the message and get a callback with an error or details of the message that was sent
    server.send({
      text: text,
      from: "ctsmailerbot <ctsmailerbot@gmail.com>",
      to: address,
      subject: "Message From ctsmailerbot"
    }, (err, message) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })

  });
}
