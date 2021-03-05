module.exports = {
    name: 'info-number',
    description: "info about the number command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Number command", "Generates a random number from 1 to <...>")
        .addField("Usage:", "`.number` 69 ( will give you a random number between 1 and 69 )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}