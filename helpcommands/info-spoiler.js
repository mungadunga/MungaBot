module.exports = {
    name: 'info-spoiler',
    description: "info-spoiler command",
    execute(message, args){

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .setColor(0x7A7B80)
        .addField("Spoiler command", "Write something in an annoying spoiler format!")
        .addField("Usage:", "`>spoiler` <...>")
        .setTimestamp();
        message.channel.send(embed);
        
    }
}