module.exports = {
   name: 'info-convert',
   description: "info-convert command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("Usage:")
      .addField("Convert command", ">convert <type> <number>")
      .addField("Example:", "`>convert binary 20`, OR >convert 2 20")
      .addField('Radixes available: 2, 3, 4, 5, 6, 7, 8, 9, 10');
      message.channel.send(embed);
   }
}