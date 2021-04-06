module.exports = {
   name: 'userinfo',
   description: "info about user",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username + " 's Profile")
      .addField('__' + message.author.username + " 's ID__", message.author.id)
      .addField('__Current Server__', message.guild.name)
      .setColor(0x002EFF)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp();
      message.channel.send(embed);
   }
}