module.exports = {
    name: 'sup',
    description: "say hello to munga bot! ( mostly used to test if the bot is online lol )",
    execute(message, args){

        const Discord = require('discord.js');
        let user = message.mentions.members.first();
        let guild = message.guild
        var d = Math.random();

        if (d < 0.33){
            message.channel.send('sup');
        } else if (d > 0.66){
            message.channel.send('hey hey');
        } else {
            message.channel.send('hello there');
        }
    }
}