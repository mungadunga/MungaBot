module.exports = {
    name: 'info-clap',
    description: "info about the clap command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Clap command", "Replace spaces with clap emojis!")
        .addField("Usage:", "`/clap` <...>")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}