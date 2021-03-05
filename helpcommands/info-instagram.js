module.exports = {
    name: 'info-instagram',
    description: "info about the instagram command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Instagram command", "Sends the link to my instagram accounts")
        .addField("Usage:", "`.instagram`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}