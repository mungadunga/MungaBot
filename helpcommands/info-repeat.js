module.exports = {
    name: 'info-repeat',
    description: "info about the repeat command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Repeat command", "Use MungaBot to say something!")
        .addField("Usage:", "`/repeat` <anything> ( for example `/repeat` NANI?! )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}