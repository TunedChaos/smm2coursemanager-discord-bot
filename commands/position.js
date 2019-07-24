const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
const common = require('../common')

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
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)

    console.log('"' + commandContent + '"')

    var messageRegex = /^!position [a-hj-np-y\d]{3}( |-)[a-hj-np-y\d]{3}( |-)[a-hj-np-y\d]{3}$/gi;
    if(commandContent.match(messageRegex) !== null){
        var courseCode = messageContent.substr(messageContent.indexOf("!position") + 10, 11)
        getPosition(personName,courseCode)
        .then(response => {
            responseMessage = JSON.parse(response).personalMessage
            message.channel.send(responseMessage)
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
    }else{
        message.channel.send(personName + ", please enter in the form of !position XXX-XXX-XXX.")
            .then(message => console.log(`Send message: ${message.content}`))
            .catch(console.error)
    }
}