module.exports = {
    name: 'info-say',
    description: "info about the say command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Say command", "Use MungaBot to say something!")
        .addField("Usage:", "`/say` <anything> ( for example `/say` NANI?! )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}