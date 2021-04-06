module.exports = {
   name: 'spoiler',
   description: "spoiler",
   execute(message, args){
      let letter = args.join("");
      const Discord = require('discord.js')

      if(!args[0]){
         const embedHELP = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Correct usage:", "`.spoiler` <...>")
         .setFooter("For more info use `.info-spoiler`");
         message.channel.send(embedHELP);
      } else {
         message.delete();
         message.channel.send("||" + letter.split("").join('||||') + "||");
      }
   }
}