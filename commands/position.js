const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)

function getPosition(personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('course_position', personName, courseCode)
        socket.on('position_course', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var messageContent = message.content;
    var personName = message.author.username
    var courseCode = messageContent.substr(messageContent.indexOf("!position") + 10, 11)
    getPosition(personName,courseCode)
    .then(response => {
        jsonResponse = JSON.parse(response)
        responseMessage = `${message.author}, ${jsonResponse.message}`
        message.channel.send(responseMessage)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    })
}