module.exports = {
    name: 'info-cards',
    description: "info-cards command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Cards:**")
        .setDescription("How to play: Before starting the match, you and your opponent will agree on the amount of cards and their rarity then just play lol")
        .addField("__Common cards:__ (white)", "`/rick`")
        .addField("__Uncommon cards:__ (green)", ".")
        .addField("__Rare cards:__ (blue)", "`/suscard`, `/mememan`, `/zoom`")
        .addField("__Epic cards:__ (purple)", "`/matt`")
        .addField("__Legendary cards:__ (gold)", "`/giorno`, `/duo`")
        .addField("__Mythical cards:__ (red)", "`/uno`, `/communism`, `/ger`");
        
        message.channel.send(embed);
        
    }
}