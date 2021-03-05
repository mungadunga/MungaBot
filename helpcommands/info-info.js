module.exports = {
    name: 'info-info',
    description: "info about the info command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Info command", "bruh wtf u doin here")
        .addField("Usage:", "`.info`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}