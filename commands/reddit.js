module.exports = {
    name: 'reddit',
    description: "reddit command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0xFF0000)
        .addField("MungaDunga's subreddit", "https://www.reddit.com/r/mungadunga/")
        .addField("MungaBot's subreddit", "https://www.reddit.com/r/mungabot/");
        
        message.channel.send(embed);
    }
}