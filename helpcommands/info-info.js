module.exports = {
    name: 'info-info',
    description: "info about the info command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Info command", "bruh try the `/iq` command cuz it looks like u lost a lot of braincells these days")
        .addField("Usage:", "`/info`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}