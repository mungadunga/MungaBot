module.exports = {
    name: 'snipe',
    description: "try this command on someone! And if ur lucky, u may get a crit hit!",
    execute(message, args){

        const Discord = require('discord.js')
        let user = message.mentions.members.first();
        let guild = message.guild
        var d = Math.random();

        if(user){

            if (d < 0.45){

                const embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .addField('Sniping...', "You sucessfully snip- _**Wait, WHAT?!**_ " + user.toString() + " has a reverse card! You got sniped back sorry for that bro");
    
                let msg = message.channel.send(embed).then(messageReaction => {
                    messageReaction.react('696302147653861387');
                });
    
            } else if (d > 0.55){
    
                const embed = new Discord.MessageEmbed()
                .setColor(0x00FF00)
                .addField('Sniping...', "You sucessfully sniped " + user.toString());
    
                let msg = message.channel.send(embed).then(messageReaction => {
                    messageReaction.react('700762868278231070');
                });
    
            } else {
    
                const embed = new Discord.MessageEmbed()
                .setColor(0x0000FF)
                .addField('Sniping...', "YIKES " + message.author.username + " scored a critical hit on " + user.toString() + "!");
    
                let msg = message.channel.send(embed).then(messageReaction => {
                    messageReaction.react('730453087046860811');
                    messageReaction.react('696301297372102726');
                });
            }

        } else {
            
            const embedHELP = new Discord.MessageEmbed()
    
            .setColor(0xFF0000)
            .addField("Correct usage:", "`>snipe` <@user>")
            .setFooter("For more info use `>info-snipe`");
            message.channel.send(embedHELP);

        }
    }      
}

