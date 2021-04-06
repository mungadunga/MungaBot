module.exports = {
    name: 'info-serverinfo',
    description: "info about the serverinfo command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Serverinfo command", "Shows some important info about your server")
        .addField("Usage:", "`.serverinfo`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}