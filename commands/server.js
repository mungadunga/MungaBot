module.exports = {
    name: 'server',
    description: "idk",
    execute(message, args){

        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("Servers that you might like:")
        .addField("MungaBot's official server:", "https://discord.gg/QSBEwSe")
        .addField("MungaDunga's server:", "https://discord.gg/KdabcRS")
        
        message.channel.send(embed);
    }
}