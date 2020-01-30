const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
var commandPrefix = process.env.COMMAND_PREFIX

function getStatus(personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('course_status', `${commandPrefix}status`, personName, courseCode)
        socket.on('status_course', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var personName = message.author.username
    var courseCode = message.content.substr(message.content.indexOf(`${commandPrefix}status`) + 8, 11)
    getStatus(personName,courseCode)
    .then(response => {
        jsonResponse = JSON.parse(response)
        responseMessage = `${message.author}, ${jsonResponse.message}`
        message.channel.send(responseMessage)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    })

}