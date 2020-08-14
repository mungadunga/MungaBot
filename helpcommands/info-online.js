module.exports = {
    name: 'info-online',
    description: "info about the online command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Online command", "Shows the number of online members in this server")
        .addField("Usage:", "`/online`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}