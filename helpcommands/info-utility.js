module.exports = {
    name: 'info-utility',
    description: "info-utility command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Utility:**")
        .addField("__List of boring commands to get extra info:__","`>userinfo`, `>serverinfo`, `>version`, `>creator`, `>dates`");
        
        message.channel.send(embed);
        
    }
}