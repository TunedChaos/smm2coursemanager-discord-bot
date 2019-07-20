const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
const common = require('../common')

function getStatus(personName, courseCode) {
    return new Promise(resolve => {
        socket.emit('course_status', personName, courseCode)
        socket.on('status_course', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var messageContent = message.content;
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)

    console.log('"' + commandContent + '"')

    var messageRegex = /^!status [a-hj-np-y\d]{3}( |-)[a-hj-np-y\d]{3}( |-)[a-hj-np-y\d]{3}$/gi;
    if(commandContent.match(messageRegex) !== null){
        var courseCode = messageContent.substr(messageContent.indexOf("!status") + 8, 11)
        getStatus(personName,courseCode)
        .then(response => {
            message.channel.send(response)
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
    }else{
        message.channel.send(personName + ", please enter in the form of !status XXX-XXX-XXX.")
            .then(message => console.log(`Send message: ${message.content}`))
            .catch(console.error)
    }
}