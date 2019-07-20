const add = require ('../commands/add')
const status = require ('../commands/status')
const list = require ('../commands/list')
const playing = require ('../commands/playing')
const next = require ('../commands/next')
module.exports = (client, message) => {
    if(message.channel.id === process.env.CHANNEL_ID && message.author.id !== process.env.BOT_USER_ID)
    {
        if (message.content.includes("!add"))
        {
            return add(message)
        }
        else if(message.content.includes("!status"))
        {
            return status(message)
        }
        else if(message.content.includes("!playing"))
        {
            return playing(message)
        }
        else if(message.content.includes("!list"))
        {
            return list(message)
        }
        else if(message.content.includes("!next"))
        {
            return next(message)
        }
    }
}
