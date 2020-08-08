module.exports = {
    name: 'info-youtube',
    description: "info about the youtube command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Youtube command", "Sub to my channel! Use `/youtube` and MungaBot will send u the link")
        .addField("Usage:", "`/youtube`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}