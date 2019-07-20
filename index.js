const fs = require('fs')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname+'/.env')})
const Discord = require('discord.js')
const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, (...args) => eventHandler(client, ...args))
    })
})

client.login(process.env.BOT_TOKEN)