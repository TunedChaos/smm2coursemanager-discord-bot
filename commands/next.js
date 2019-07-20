const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
const common = require('../common')

function getNext(){
    return new Promise(resolve => {
        socket.emit('next_course')
        socket.on('course_next', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)
    console.log(commandContent)
    var messageRegex = /^!next$/gi;
    if(commandContent.match(messageRegex) !== null){
        getNext()
        .then(data => {
            course = JSON.parse(data)
            message.channel.send(personName + ", the next unplayed course is " + course.CourseID + ", submitted by " + course.Submitter + ".")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
        .catch(() => {
            message.channel.send(personName + ", there are no unplayed courses in the list.")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
    }
}