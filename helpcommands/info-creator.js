module.exports = {
    name: 'info-creator',
    description: "info about the creator command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Creator command", "Hmm... Who created almighty MungaBot? Use `/creator` to find out!")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}