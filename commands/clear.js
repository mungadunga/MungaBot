
module.exports = {
    name: 'clear',
    description: "clear messages",
    execute(message, args){ 

        if (!message.member.hasPermission(['ADMINISTRATOR'])) {
            message.channel.send("Sorry bro you cannot delete messages, you need the ADMINISTRATOR permission");
        } else if (member.hasPermission(['ADMINISTRATOR'])) { 
            message.channel.bulkDelete(args[1]);
            if(!args[1]) return message.reply('Proper usage: `/clear` <number>') 
        }
    
    }    
}   