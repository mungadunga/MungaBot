module.exports = {
    name: 'info-weather',
    description: "info about the weather command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Weather command", "You can check the weather in your city by using MungaBot!")
        .addField("Usage:", "`>weather` <city> ( make sure to write it correctly )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}