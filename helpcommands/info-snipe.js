module.exports = {
    name: 'info-snipe',
    description: "info about the snipe command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Snipe command", "Try this command on someone! And if ur lucky, u may get a crit hit!")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}