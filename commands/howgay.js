module.exports = {
    name: 'howgay',
    description: "why are you gae?",
    execute(message, args){

        const Discord = require('discord.js');
        let user = message.mentions.members.first();
        const embed = new Discord.MessageEmbed()

        .addField("How gay is " + message.author.username + "?", message.author.username + ' is ' + Math.round(Math.random() * 100) + '% gay 🏳️‍🌈')
        .setColor(0x002EFF);

        message.channel.send(embed);
    }
}
