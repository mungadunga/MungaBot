module.exports = {
    name: 'info-kick',
    description: "info about the kick command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Kick command", "Kick someone from your server! ( You need the ADMINISTRATOR permission in order to use this command )")
        .addField("Usage:", "`>kick` <user>")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}