module.exports = {
    name: 'number',
    description: "generates a random number between 1 and 5",
    execute(message, args){

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .setColor(0x7A7B80) 
        .addField('Random number generator', Math.ceil(Math.random() * 5));

        message.channel.send(embed);
    }
}