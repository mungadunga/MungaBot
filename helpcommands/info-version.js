module.exports = {
    name: 'info-version',
    description: "info about the version command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Version command", "Shows MungaBot's current version")
        .addField("Usage:", "`/version`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}