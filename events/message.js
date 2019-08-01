const add = require ('../commands/add')
const status = require ('../commands/status')
const list = require ('../commands/list')
const playing = require ('../commands/playing')
const next = require ('../commands/next')
const queue = require('../commands/queue')
const position = require('../commands/position')
module.exports = (client, message) => {
    if(message.channel.id === process.env.CHANNEL_ID && message.author.id !== process.env.BOT_USER_ID)
    {
        var messageContent = message.content.toLowerCase()
        if (messageContent.includes("!add"))
        {
            return add(message)
        }
        else if(messageContent.includes("!status"))
        {
            return status(message)
        }
        else if(messageContent.includes("!playing"))
        {
            return playing(message)
        }
        else if(messageContent.includes("!list"))
        {
            return list(message)
        }
        else if(messageContent.includes("!next"))
        {
            return next(message)
        }
        else if(messageContent.includes("!queue"))
        {
            return queue(message)
        }
        else if(messageContent.includes("!position"))
        {
            return position(message)
        }
    }
}
