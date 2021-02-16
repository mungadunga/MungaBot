module.exports = {
   name: 'dm',
   description: "dm someone using mungabot!",
   execute(message, args){
      const Discord = require('discord.js');
      let user = message.mentions.members.first();

      if(!user){
         const embed = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Correct usage:", "`>dm` <@user> <message>")
         .setFooter("For more info use `>info-dm`");
         message.channel.send(embed);
      } else {
         const embed2 = new Discord.MessageEmbed()
         .setColor(0x7A7B80)
         .addField(`From: ${message.author.username}`, `${args.join(' ')}`)
         user.send(embed2);
         message.delete({timeout: 1});
         message.author.send("DM sucessfully sent!");
      };
   },
};