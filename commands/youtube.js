module.exports = {
    name: 'youtube',
    description: "sends link to munga's youtube channel",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0xFF0000)
        .addField("MungaDunga's youtube channel:", "https://www.youtube.com/channel/UCm6m7iJj2CSdcmfKAYtgVFg")
        
        message.channel.send(embed);
    }
}