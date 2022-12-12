module.exports = {
   name: 'version',
   description: "displays current version of the bot",
   execute(message, args){
      let version = '7.1.0'; 
      
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("MungaBot's current version:", `Version ${version}`);
      message.channel.send(embed);
   },
};