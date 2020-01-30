const path = require('path')
require('dotenv').config({path: path.resolve(__dirname + '../.env')})

module.exports = message => {
    if(typeof process.env.LIST_ADDRESS != "undefined"){
        if(process.env.LIST_ADDRESS !== "")
        {
            message.channel.send(`${message.author}, to view the current list of levels, and their statuses, please visit ${process.env.LIST_ADDRESS}`)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
        }else{
            message.channel.send(`${message.author}, there is currently no list available.`)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
        }
    }else{
        message.channel.send(`${message.author}, there is currentnly no list available.`)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    }
}