const { Guild } = require("discord.js");

module.exports = {
    name: 'snipe',
    description: "snipes a random user",
    execute(message, args){

        const Discord = require('discord.js')
        let user = message.mentions.members.first();
        let guild = message.guild
        var d = Math.random();

        if (d < 0.45){

            const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setDescription("You sucessfully snip- _**Wait, WHAT?!**_ " + user.toString() + " has a reverse card!")

            let msg = message.channel.send(embed).then(messageReaction => {
                messageReaction.react('696302147653861387');
            });

        } else if (d > 0.55){

            const embed = new Discord.MessageEmbed()
            .setColor(0x00FF00)
            .setDescription("You sucessfully sniped " + user.toString())

            let msg = message.channel.send(embed).then(messageReaction => {
                messageReaction.react('700762868278231070');
            });

        } else {

            const embed = new Discord.MessageEmbed()
            .setColor(0x0000FF)
            .setDescription("YIKES " + message.author.username + " scored a critical hit on " + user.toString() + "!")

            let msg = message.channel.send(embed).then(messageReaction => {
                messageReaction.react('730453087046860811');
                messageReaction.react('696301297372102726');
            });
            
        }
    }      
}

