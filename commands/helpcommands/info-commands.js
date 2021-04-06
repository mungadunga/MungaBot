module.exports = {
   name: 'info-commands',
   description: "info-commands command",
   execute(message, args){
      let com = require("./info-commands.json");
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .setTitle("**Commands:**")
      .addField("__Regular Commands:__", `\`${com.reg.join("`, `")}\``)
      .addField("__Media:__", `\`${com.media.join("`, `")}\``)
      .addField("__Admin:__", `\`${com.admin.join("`, `")}\``);
      message.channel.send(embed);
   }
}