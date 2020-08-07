module.exports = {
    name: 'info-sup',
    description: "info about the sup command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Sup command", "( mostly used to test if the bot is online lol )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}