module.exports = {
   name: 'info-dates',
   description: "info about the dates command",
   execute(message, args){

      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("Dates command", "Displays release dates of MungaBot's main versions!")
      .addField("Usage:", "`>dates`")
      .setTimestamp();
      message.channel.send(embed);
   }
}