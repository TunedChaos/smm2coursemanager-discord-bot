const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
const common = require('../common')

function getQueue(personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('course_queue', personName, courseCode)
        socket.on('queue_course', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var messageContent = message.content;
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)

    console.log('"' + commandContent + '"')
    var courseCode = messageContent.substr(messageContent.indexOf("!queue") + 8, 11)
        getQueue(personName,courseCode)
        .then(response => {
            responseMessage = JSON.parse(response).personalMessage
            message.channel.send(responseMessage)
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
}