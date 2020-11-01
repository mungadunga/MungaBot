module.exports = {
    name: 'info-fight',
    description: "info about the fight command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Fight command", "Fight someone in your server!")
        .addField("Usage:", "`/fight` <user>")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}