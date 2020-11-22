module.exports = {
    name: 'info-patreon',
    description: "info about the patreon command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Patreon command", "Support MungaDunga and MungaBot on patreon!")
        .addField("Usage:", "`>patreon`")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}