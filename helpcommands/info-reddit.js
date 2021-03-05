module.exports = {
   name: 'info-reddit',
   description: "info about the reddit command",
   execute(message, args){
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor(0x7A7B80)
      .addField("Reddit command", "Join my subreddit! Use `.reddit` and MungaBot will send you the link. You can also post your suggestions on r/mungabot")
      .addField("Usage:", "`.reddit`")
      .setTimestamp();
      message.channel.send(embed);
   }
}