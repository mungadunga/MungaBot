module.exports = {
    name: 'creator',
    description: "hmm who created almighty munga bot? ",
    execute(message, args){ 
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()

      .setColor(0x7A7B80)
      .setTitle("Who created MungaBot???")
      .setDescription("_**Munga The Great**_")
      .setFooter('Use >discord to join his server!');
      
      message.channel.send(embed);
   }    
}   