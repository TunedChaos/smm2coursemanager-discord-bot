const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})
const common = require('../common')

module.exports = message => {
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)

    var messageRegex = /^!list$/gi;
    if(commandContent.match(messageRegex) !== null){
        if(typeof process.env.LIST_ADDRESS != "undefined"){
            if(process.env.LIST_ADDRESS !== "")
            {
                message.channel.send(personName + " to view the current list of levels, and their statuses, please visit " + process.env.LIST_ADDRESS)
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
            }else{
                message.channel.send(personName + " there is currentnly no list available.")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
            }
        }else{
            message.channel.send(personName + " there is currentnly no list available.")
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error)
        }
    }
}