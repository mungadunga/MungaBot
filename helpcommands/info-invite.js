module.exports = {
    name: 'info-invite',
    description: "info about the insult command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Invite command", "Invite me to ur server! Use the `/invite` command and i will send u a link, then click on it and select your server and that's it!")
        .addField("Usage:", "`/invite`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}