module.exports = {
    name: 'update',
    description: 'only munga himself can use this command',
    execute(message, args){

        const Discord = require('discord.js');
        
        var version = '4.1.1'; 

        //embed

        const embed = new Discord.MessageEmbed()

        .setColor(0x0000FF)
        .setTitle("New update to MungaBot!")
        .setDescription("v" + version)
        .addField('Description:', args.join(' '))
        .setTimestamp();

        message.channel.send(embed);
        message.delete({timeout: 100});
        
    }
}