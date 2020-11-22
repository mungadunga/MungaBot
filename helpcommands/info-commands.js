module.exports = {
    name: 'info-commands',
    description: "info-commands command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Commands:**")
        .addField("__List of all regular commands:__","`>sup`, `>howgay`, `>iq`, `>insult`, `>repeat`, `>pp`, `>quiz`, `>servercount`, `>online`,`>dm`,`>weather`,`>number`, `>snipe`, `>poll`, `>fight`, `>clap`, `>hack`");
        
        message.channel.send(embed);
        
    }
}