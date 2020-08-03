module.exports = {
    name: 'dm',
    description: "dm someone using mungabot!",
    execute(message, args){

        const Discord = require('discord.js');
        let user = message.mentions.members.first();
        
        user.send(args.join(' '));
        message.delete({timeout: 100});
    }
}