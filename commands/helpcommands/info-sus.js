module.exports = {
    name: 'info-sus',
    description: "info about the sus command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Sus command", "Someone in ur server's actin sus? Use this command on him.")
        .addField("Usage:", "`.sus` <@user>")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}