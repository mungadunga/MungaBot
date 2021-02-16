
module.exports = {
   name: 'clear',
   description: "clear messages",
   execute(message, args){ 
      const Discord = require('discord.js');
      const number = Math.ceil(Math.random() * args.join(' '));
      const member = message.author;

      if (!message.member.hasPermission(['ADMINISTRATOR'])) {
         const embed = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Missing role:", "You need the ADMINISTRATOR role to use this command.")
         .setFooter("For more info use `>info-clear`");
         message.channel.send(embed)
      } else if(number !== number){
         const embed2 = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Error:", "Please enter a valid number.")
         .setFooter("For more info use `>info-clear`");
         message.channel.send(embed2)
      } else if(!args[0]){
         const embed3 = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Correct usage:", "`>clear` <number>")
         .setFooter("For more info use `>info-clear`");
         message.channel.send(embed3)
      } else if(number > 100){
         const embed3 = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Limit: 100 messages", "<number> should be smaller or equal to 100")
         .setFooter("For more info use `>info-clear`");
         message.channel.send(embed3)
      } else {
         message.channel.bulkDelete(number);
      };
   },    
};