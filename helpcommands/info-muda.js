module.exports = {
    name: 'info-muda',
    description: "info about the muda command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Muda command", "Sends a random muda scene from JoJo's Bizarre Adventure.")
        .addField("Usage:", "`/muda`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}