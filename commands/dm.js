module.exports = {
    name: 'dm',
    description: "dm someone using mungabot!",
    execute(message, args){

        const Discord = require('discord.js');
        let user = message.mentions.members.first();

        if(!args[0]) return message.channel.send('Proper usage: /dm <@user> <your message>');
        
        user.send(args.join(' '));
        message.delete({timeout: 100});
    }
}