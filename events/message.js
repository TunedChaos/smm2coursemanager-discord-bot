const add = require ('../commands/add')
const list = require ('../commands/list')
const next = require ('../commands/next')
const playing = require ('../commands/playing')
const position = require('../commands/position')
const queue = require('../commands/queue')
const status = require ('../commands/status')

module.exports = (client, message) => {
    if(message.channel.id === process.env.CHANNEL_ID && message.author.id !== process.env.BOT_USER_ID)
    {
        var commandPrefix = process.env.COMMAND_PREFIX
        var messageContent = message.content.toLowerCase()
        if (messageContent.startsWith(`${commandPrefix}add`))
        {
            return add(message)
        }
        else if(messageContent.startsWith(`${commandPrefix}list`))
        {
            return list(message)
        }
        else if(messageContent.startsWith(`${commandPrefix}next`))
        {
            return next(message)
        }
        else if(messageContent.startsWith(`${commandPrefix}playing`))
        {
            return playing(message)
        }
        else if(messageContent.startsWith(`${commandPrefix}position`))
        {
            return position(message)
        }
        else if(messageContent.startsWith(`${commandPrefix}queue`))
        {
            return queue(message)
        }
        else if(messageContent.startsWith(`${commandPrefix}status`))
        {
            return status(message)
        }
    }
}
