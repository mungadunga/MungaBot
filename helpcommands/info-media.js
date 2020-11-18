module.exports = {
    name: 'info-media',
    description: "info-media command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Media:**")
        .addField("__List of all commands using jpg and mp4 files:__","`/alia`, `/muda`, `/meme`, `/sus`");
        
        message.channel.send(embed);
        
    }
}