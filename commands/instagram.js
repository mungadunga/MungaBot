module.exports = {
    name: 'instagram',
    description: "sends link to munga's instagram accounts",
    execute(message, args){

        const Discord = require('discord.js');
        
        const embed = new Discord.MessageEmbed()
        .setColor(0xC70039)
        .addField("MungaDunga's meme page:", "https://www.instagram.com/munga.dunga/")
        .addField("MungaDunga's official account:", "https://www.instagram.com/mungadungaa/")
        message.channel.send(embed);
    }
}
