module.exports = {
   name: 'info-cards',
   description: "info-cards command",
   execute(message, args){

      let obj = require("./info-cards.json");

      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .setTitle("**Cards:**")
      .setDescription("How to play: Before starting the match, you and your opponent will agree on the amount of cards and their rarity then just play lol")
      .addField("__Common cards:__ (white)", `\`${obj.common.join("")}\``)
      .addField("__Uncommon cards:__ (green)", `\`${obj.uncommon.join("")}\``)
      .addField("__Rare cards:__ (blue)", `\`${obj.rare.join("`, `")}\``)
      .addField("__Epic cards:__ (purple)", `\`${obj.epic.join("")}\``)
      .addField("__Legendary cards:__ (gold)", `\`${obj.legendary.join("`, `")}\``)
      .addField("__Mythical cards:__ (red)", `\`${obj.mythic.join("`, `")}\``);
      message.channel.send(embed);
   }
}