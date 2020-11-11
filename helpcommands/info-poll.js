module.exports = {
    name: 'info-poll',
    description: "info about the poll command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Poll command", "Create a simple yes or no poll! Just type your opinion / question and MungaBot will automatically generate a poll for you with 0 effort!")
        .addField("Usage:", "`/poll` <...>")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}