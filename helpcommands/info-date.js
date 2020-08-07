module.exports = {
    name: 'info-date',
    description: "info about the date command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Date command", "Displays release date of MungaBot!")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}