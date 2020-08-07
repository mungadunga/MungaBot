module.exports = {
    name: 'info-howgay',
    description: "info about the howgay command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Howgay command", "MungaBot can sense the gayness inside every human, use `/howgay` to test if you truly belong to this server!")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}