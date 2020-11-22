module.exports = {
    name: 'info-quiz',
    description: "info about the quiz command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Quiz command", "You will have 10 seconds to answer to MungaBot's question! First one to answer correctly wins.")
        .addField("Usage:", "`>quiz`")
        .setFooter("When answering a question, do not use the > prefix!")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}