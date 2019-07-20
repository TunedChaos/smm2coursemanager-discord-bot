const common = require('../common')

module.exports = message => {
    var personName = common.getPersonName(message.author.id, message)
    var commandContent = common.getCommand(message.author.id, message)

    var messageRegex = /^!list$/gi;
    if(commandContent.match(messageRegex) !== null){
        message.channel.send(personName + " to view the current list of levels, and their statuses, please visit https://tunedchaos.tech/smm2courses")
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error)
    }
}