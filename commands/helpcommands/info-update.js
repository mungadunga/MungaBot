module.exports = {
    name: 'info-update',
    description: "info about the update command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Update command", "You can ignore this, it's my 'update to MungaBot' template")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}