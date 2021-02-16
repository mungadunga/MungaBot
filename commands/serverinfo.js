module.exports = {
   name: 'serverinfo',
   description: "servers command",
   execute(message, args){
      const Discord = require('discord.js');

      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .setTitle(message.guild.name + "'s info")
      .setThumbnail(message.guild.iconURL())
      .addField("Owner", `${message.guild.owner}`)
      .addField("Members ( Total | Humans | Bots )", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
      .addField("Emoji Count", `${message.guild.emojis.cache.size} emojis`, true)
      .addField("Roles Count", `${message.guild.roles.cache.size} roles`, true)
      .addField("Channels Count", `${message.guild.channels.cache.size} channels`, true)
      .addField("Creation date", `This server was created on ` + message.channel.guild.createdAt.toUTCString().substr(0, 16));
      message.channel.send(embed);
   }
}      


