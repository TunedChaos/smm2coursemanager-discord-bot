module.exports = {
    getPersonName: function(authorid, message){
        if(authorid === process.env.RESTREAM_ID)
        {
            var personName = message.content.substring(
                message.content.indexOf(":") + 2,
                message.content.indexOf("]")
            )
        }else{
            var personName = message.author.username;
        }
        return personName
    },
    getCommand: function(authorid, message){
        if(authorid === process.env.RESTREAM_ID)
        {
            var commandContent = message.content.substr(message.content.indexOf("]") + 2)
        }else{
            var commandContent = message.content
        }
        return commandContent
    }
}
