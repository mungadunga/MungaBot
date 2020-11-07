module.exports = {
    name: 'dates',
    description: "displays release date of munga bot",
    execute(message, args){ 

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("Important dates:")
        .setDescription(`__Main MungaBot versions release date:__
        MungaBot v1.0.0: 23.06.20 (first version of mungabot, only had sup and version commands)
        MungaBot v2.0.0: 28.06.20 (added admin commands and finally, a command handler)
        MungaBot v3.0.0: 22.07.20 (added tons of new commands, like /weather and /poll)
        MungaBot v4.0.0: 07.08.20 (added /info commands to every existing one)
        MungaBot v5.0.0: 04.10.20 (added the cards category)
        `);
        
        message.channel.send(embed);

    }    
}   