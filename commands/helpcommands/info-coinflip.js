module.exports = {
    name: 'info-coinflip',
    description: "info about the coinflip command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Coinflip command", "Not knowing how to settle an argument? Toss a coin!")
        .addField("Usage:", "`.coinflip`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}