const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
const common = require('../common')

function addCourse(personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('add_course', personName, courseCode, process.env.AUTHCODE)
        socket.on('course_add', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var messageContent = message.content;
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)

    var messageRegex = /^!add [a-hj-np-y\d]{3}( |-)[a-hj-np-y\d]{3}( |-)[a-hj-np-y\d]{3}$/gi;
    if(commandContent.match(messageRegex) !== null){
        var courseCode = messageContent.substr(messageContent.indexOf("!add") + 5, 12)
        addCourse(personName,courseCode)
        .then(response => {
            responseMessage = JSON.parse(response).personalMessage
            message.channel.send(responseMessage)
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
    }else{
        message.channel.send(personName + ", please enter in the form of !add XXX-XXX-XXX")
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    }
}