module.exports = {
   name: 'info-calculate',
   description: "info-calculate command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()

      .setColor(0x7A7B80)
      .addField("Calculate command", "Bad at math? This command can calculate almost anything!")
      .addField("Examples:", "`\`\`\`.calculate 5cm to inches\`\`\` `\`\`\`.calculate pi + 2\`\`\` `\`\`\`.calculate sin(90 deg)\`\`\`")
      .addField("Usage:", "`.calculate` <math>")
      .setTimestamp();
      message.channel.send(embed);
   },
};