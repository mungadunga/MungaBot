module.exports = {
    name: 'online',
    description: "online command",
    execute(message, args){ 
        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .addField("Online Members", message.guild.members.cache.filter(member => member.presence.status !== "offline").size)
        .addField("Offline Members", message.guild.members.cache.filter(member => member.presence.status == "offline").size)
        message.channel.send(embed);
    }
}