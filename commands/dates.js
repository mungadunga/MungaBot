module.exports = {
   name: 'dates',
   description: "displays release date of munga bot",
   execute(message, args){ 
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .setTitle("MungaBot's main versions:")
      .addField("__MungaBot v1.0.0:__ 23.06.20", "first version of mungabot, only had >sup and >version")
      .addField("__MungaBot v2.0.0:__ 28.06.20", "added admin commands and finally, a command handler")
      .addField("__MungaBot v3.0.0:__ 22.07.20", "added tons of new commands, like >weather and >poll")
      .addField("__MungaBot v4.0.0:__ 07.08.20", "added >info commands to every existing one")
      .addField("__MungaBot v5.0.0:__ 04.10.20", "added the cards category")
      .addField("__MungaBot v6.0.0:__ 18.11.20", "redesigned >info, and switched prefix from / to >")
      .addField("__MungaBot v7.0.0:__ 13.02.21", "organised mungabot's folder")
      message.channel.send(embed);
   }    
}   