const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)

function getQueue(personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('course_queue', personName)
        socket.on('queue_course', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    getQueue(message.author.username)
    .then(response => {
        jsonResponse = JSON.parse(response)
        responseMessage = `${message.author}, ${jsonResponse.message}`
        message.channel.send(responseMessage)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    })
}