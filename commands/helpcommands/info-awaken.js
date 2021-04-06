module.exports = {
    name: 'info-awaken',
    description: "info about the awaken command",
    execute(message, args){

        const Discord = require('discord.js');
        
        const embed = new Discord.MessageEmbed()
        .setColor(0x7A7B80)
        .addField("Awaken command", "Earrape pillar men theme from JoJo's bizare adventure")
        .addField("Usage:", "`.awaken`")
        .setTimestamp();
        message.channel.send(embed);
    }
}