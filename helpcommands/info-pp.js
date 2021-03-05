module.exports = {
   name: 'info-pp',
   description: "info about the pp command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("PP command", "How big is your PP?")
      .addField("Usage:", "`.pp`")
      .setTimestamp();
      message.channel.send(embed);
   }
}