module.exports = {
    name: 'info-meme',
    description: "info about the meme command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Meme command", "Sends a meme from r/meme")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}