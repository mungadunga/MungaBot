module.exports = {
    name: 'sus',
    description: "red sus",
    execute(message, args){
        const Discord = require('discord.js');
        let user = message.mentions.members.first();

        if(!user){

            const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .addField("Correct usage:", "`/sus` <user>")
        
            message.channel.send(embed);

        } else {

            message.channel.send(user.toString(), {files: ["./images/redsus.jpg"]});
        }
    }
}
