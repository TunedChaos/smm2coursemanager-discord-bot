const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
var commandPrefix = process.env.COMMAND_PREFIX

function addCourse(requestPlatform, requestPlatformID, personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('add_course', `${commandPrefix}add`, requestPlatform, requestPlatformID, personName, courseCode, process.env.AUTHCODE)
        socket.on('course_add', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var personName = message.author.username
    var personID = message.author.id
    var courseCode = message.content.substr(message.content.indexOf(`${commandPrefix}add`) + 5, 12)
    addCourse('Discord',personID,personName,courseCode)
    .then(response => {
        jsonResponse = JSON.parse(response)
        responseMessage = `${message.author}, ${jsonResponse.message}`
        message.channel.send(responseMessage)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    })
    .catch(err => {
        console.log(err)
    })
}