
module.exports = {
    name: 'clear',
    description: "clear messages",
    execute(message, args){ 

        let member = message.author

        if (!message.member.hasPermission(['ADMINISTRATOR'])) {
            message.reply("You don't have the ADMINISTRATOR permission, sorry for that bro")
        } else {
            message.channel.bulkDelete(args.join(' '));
        }
    }    
}   