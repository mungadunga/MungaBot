module.exports = {
    name: 'version',
    description: "displays current version of the bot",
    execute(message, args){

        var version = '6.2.1'; 
        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .setColor(0x7A7B80)
        .addField("MungaBot's current version:", "Version " + version)

        message.channel.send(embed);
       
    }    
}   
