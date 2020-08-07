module.exports = {
    name: 'info-insult',
    description: "info about the insult command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Insult command", "Do not mess with me, i have the greatest roasts of the century")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}