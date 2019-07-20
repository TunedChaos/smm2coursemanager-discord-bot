const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const io = require('socket.io-client')
var socket = io.connect(process.env.SERVER_ADDRESS)
const common = require('../common')

function getPlaying(){
    return new Promise(resolve => {
        socket.emit('currently_playing')
        socket.on('playing_currently', response => {
            resolve(response)
        })
    })
}

module.exports = message => {
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)
    console.log(commandContent)
    var messageRegex = /^!playing$/gi;
    if(commandContent.match(messageRegex) !== null){
        getPlaying()
        .then(data => {
            course = JSON.parse(data)
            message.channel.send(personName + ", the course currently being played is " + course.CourseID + ", submitted by " + course.Submitter + ".")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
        .catch(() => {
            message.channel.send(personName + ", there is currently no course being played.")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        })
    }
}