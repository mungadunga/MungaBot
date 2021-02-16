module.exports = {
   name: 'patreon',
   description: "patreon command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()

      .setColor(0xFF6100)
      .addField("MungaDunga's patreon:", "https://www.patreon.com/mungadunga");
      
      message.channel.send(embed);
   },
};
