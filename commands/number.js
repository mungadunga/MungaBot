module.exports = {
    name: 'number',
    description: "generates a random number between 1 and 5",
    execute(message, args){

        const Discord = require('discord.js');
        let randomnumber = Math.ceil(Math.random() * args.join(' '))

        if(randomnumber !== randomnumber){

            const embed2 = new Discord.MessageEmbed()
    
            .setColor(0xFF0000)
            .addField("Correct usage:", "`/number` <number>")
            .setFooter("For more info use `/info-number`");

            message.channel.send(embed2)

        } else if( randomnumber > 0 ){

            const embed = new Discord.MessageEmbed()
            .setColor(0x7A7B80) 
            .addField('Random number between 1 and ' + args.join(' '), randomnumber);

            message.channel.send(embed);
            
        }
    }
}