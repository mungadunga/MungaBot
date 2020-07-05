module.exports = {
    name: 'howgay',
    description: "how gay are u?",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .addField("How gay is " + message.author.username + "?", message.author.username + ' is ' + Math.round(Math.random() * 100) + '% gay 🏳️‍🌈')
        .setColor(0x002EFF)

        message.channel.send(embed);
   
    }
}
