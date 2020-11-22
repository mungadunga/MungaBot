module.exports = {
    name: 'info-iq',
    description: "info about the iq command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("IQ command", "How high is your IQ?")
        .addField("Usage:", "`>iq`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}