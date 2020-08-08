module.exports = {
    name: 'info-userinfo',
    description: "info about the userinfo command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Userinfo command", "Shows ur profile and some important information related to it")
        .addField("Usage:", "`/userinfo`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}