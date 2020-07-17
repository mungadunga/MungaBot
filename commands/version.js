module.exports = {
    name: 'version',
    description: "displays current version of the bot",
    execute(message, args){

        var version = '2.2.1'; 
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle('Version ' + version );

        message.channel.send(embed)
       
    }    
}   
