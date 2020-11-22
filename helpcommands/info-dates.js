module.exports = {
    name: 'info-dates',
    description: "info about the dates command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Date command", "Displays release date of MungaBot!")
        .addField("Usage:", "`>date`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}