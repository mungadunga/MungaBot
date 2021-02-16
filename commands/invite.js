module.exports = {
   name: 'invite',
   description: "invite mungabot to your server!",
   execute(message, args){
      const Discord = require('discord.js');

      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .setTitle("Click here to invite MungaBot to your server!")
      .setDescription("https://discord.com/api/oauth2/authorize?client_id=714119740972597318&permissions=8&scope=bot");
      message.channel.send(embed);
   },
};