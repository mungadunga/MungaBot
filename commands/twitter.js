module.exports = {
    name: 'twitter',
    description: "sends link to munga's twitter",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x0000FF)
        .addField("MungaDunga's twitter:", "https://twitter.com/MungaDungaYT")
        .setFooter("folow him or u gae", message.author.displayAvatarURL());
        
        message.channel.send(embed);
    }
}