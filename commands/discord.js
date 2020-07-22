module.exports = {
    name: 'discord',
    description: "sends the link of munga's discord server",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("MungaBot's official server:", "https://discord.gg/QSBEwSe")
        .addField("MungaDunga's server:", "https://discord.gg/KdabcRS")
        .setFooter("join his server or u gae", message.author.displayAvatarURL());
        
        message.channel.send(embed);
    }
}