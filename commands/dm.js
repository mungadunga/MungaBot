module.exports = {
    name: 'dm',
    description: "dm someone using mungabot!",
    execute(message, args){

        let user = message.mentions.members.first();

        if(!user){
            
            const Discord = require('discord.js');
            const embed = new Discord.MessageEmbed()
    
            .setColor(0xFF0000)
            .addField("Correct usage:", "`/dm` <@user> <message>")
            .setFooter("For more info use `/info-dm`");
            
            message.channel.send(embed);
        } else {

            user.send(args.join(' '));
            message.delete({timeout: 1});
            message.author.send("DM sucessfully sent!");
        }
    }
}