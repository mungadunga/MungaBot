module.exports = {
    name: 'info-dm',
    description: "info about the dm command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("DM command", "Use MungaBot to dm someone! It is 100% anonymous ( it even deletes your original message WOW )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}