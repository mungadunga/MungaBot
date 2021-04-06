module.exports = {
   name: 'repeat',
   description: "repeat command",
   execute(message, args){
      let repeat = args.join(' ');
      if(!repeat){
         const Discord = require('discord.js');

         const embed = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Correct usage:", "`.repeat` <...>")
         .setFooter("For more info use `.info-repeat`");
         message.channel.send(embed);
      } else {
         message.channel.send(repeat);
         message.delete({timeout: 1});
      }
    }
}