module.exports = {
    name: 'info-admin',
    description: "info-admin command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Admin:**")
        .addField("__These commands can only be used if you have the ADMINISTRATOR role__","`/kick`, `/ban`, `/clear`");
        
        message.channel.send(embed);
        
    }
}