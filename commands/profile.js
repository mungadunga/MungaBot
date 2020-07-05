module.exports = {
    name: 'profile',
    aliases: ['p'],
    description: "player profile",
    execute(message, args){

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + " 's Profile")
        .addField('Player Name', message.author.username)
        .addField(message.author.username + " 's ID", message.author.id)
        .addField('Current Server', message.guild.name)
        .setColor(0x002EFF)
        .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(embed);
    }
}