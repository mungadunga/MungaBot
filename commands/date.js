module.exports = {
    name: 'date',
    description: "displays release date of munga bot",
    execute(message, args){ 

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("When was almighty MungaBot created???")
        .setDescription("Munga bot was proudly created on 4/20/69");
        
        message.channel.send(embed);

    }    
}   