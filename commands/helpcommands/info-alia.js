module.exports = {
   name: 'info-alia',
   description: "info about the alia command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("Ali-A command", "Behold, the shittiest yet the funniest intro of all time!")
      .addField("Usage:", "`.alia`")
      .setTimestamp();
      message.channel.send(embed);
   }
}