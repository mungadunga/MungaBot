module.exports = {
    name: 'number',
    description: "generates a random number between 1 and 5",
    execute(message, args){

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .setColor(0x7A7B80) 
        .addField('Random number between 1 and ' + args.join(' '), Math.ceil(Math.random() * args.join(' ')));

        message.channel.send(embed);
    }
}