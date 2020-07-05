module.exports = {
    name: 'iq',
    description: "how high is your iq?",
    execute(message, args){
        
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .addField('How high is ' + message.author.username + "'s IQ?", message.author.username + ' has an IQ of ' + Math.round(Math.random() * 200) + ' :brain:')
        .setColor(0x002EFF)
        .setFooter('BIG BRAIN, BIG BRAIN')

        message.channel.send(embed);

    }
}