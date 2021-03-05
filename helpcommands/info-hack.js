module.exports = {
    name: 'info-hack',
    description: "info about the hack command",
    execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("Hack command", "Hack someone. 100% legit.")
      .addField("Usage:", "`.hack <@user>`")
      .setTimestamp();
      message.channel.send(embed);
   }
}