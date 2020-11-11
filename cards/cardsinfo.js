module.exports = {
    name: 'cardsinfo',
    description: "cardsinfo command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("Cards:")
        .setDescription("How to play: Before starting the match, you and your opponent will agree on the amount of cards and their rarity then just play lol")
        .addField("Common cards: (white)", "`/rick`")
        .addField("Uncommon cards: (green)", ".")
        .addField("Rare cards: (blue)", "`/suscard`, `/mememan`")
        .addField("Epic cards: (purple)", "`/matt`")
        .addField("Legendary cards: (gold)", "`/giorno`, `/duo`")
        .addField("Mythical cards: (red)", "`/uno`, `/communism`, `/ger`")
        
        message.channel.send(embed);
        
    }
}