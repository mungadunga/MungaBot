module.exports = {
    name: 'creator',
    description: "displays creator of the bot",
    execute(message, args){ 

        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("Who created MungaBot???")
        .setDescription("_**Munga The Great**_")
        .setFooter('Use /server to join his server!');
        
        message.channel.send(embed);

    }    
}   