module.exports = {
    name: 'info-discord',
    description: "info about the discord command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Discord command", "Sends the link to some servers you might like ( including the bot's official one )")
        .addField("Usage:", "`.discord`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}