module.exports = {
    name: 'info-socialmedia',
    description: "info-socialmedia command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Social Media:**")
        .addField("__Follow MungaDunga on social media:__","`.youtube`, `.twitter`, `.instagram`, `.discord`, `.reddit`, `.patreon`");
        
        message.channel.send(embed);
        
    }
}