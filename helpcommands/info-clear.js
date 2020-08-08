module.exports = {
    name: 'info-clear',
    description: "info about the clear command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Clear command", "People spamming in your server? Use this command to delete up to 100 messages! ( You need the ADMINISTRATOR permission in order to use this command )")
        .addField("Usage:", "`/clear` <number> ( Limit: 100 messages )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}