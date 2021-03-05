module.exports = {
   name: 'info-twitter',
   description: "info about the twitter command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("Twitter command", "Sends the link to Munga's twitter")
      .addField("Usage:", "`.twitter`")
      .setTimestamp();
      message.channel.send(embed);
   }
}