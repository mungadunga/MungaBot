module.exports = {
    name: 'info-reminder',
    description: "info about the reminder command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .addField("Reminder command", "Create a reminder using MungaBot! For example >reminder 60 upload memes ( will remind you to upload memes after 60 minutes )")
        .addField("Usage:", "`>reminder` <number> <your reminder> ( <number> in minutes )")
        .setTimestamp();
        
        message.channel.send(embed);
    }
}