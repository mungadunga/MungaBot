module.exports = {
    name: 'info-ban',
    description: "info about the ban command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Ban command", "Ban someone from your server! ( You need the ADMINISTRATOR permission in order to use this command )")
        .addField("Usage:", "`.ban` <user>")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}