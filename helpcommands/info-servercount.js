module.exports = {
    name: 'info-servercount',
    description: "info about the servercount command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Servercount command", "Shows the number of servers MungaBot is in.")
        .addField("Usage:", "`.servercount`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}