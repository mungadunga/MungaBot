module.exports = {
    name: 'info-commands',
    description: "info-commands command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Commands:**")
        .addField("__Regular Commands:__", "`>clap`, `>creator`, `>calculate`, `>dates`, `>dm`, `>fight`, `>hack`, `>howgay`, `>insult`, `>iq`, `>number`, `>online`, `>poll`, `>pp`, `>quiz`, `>reminder`, `>repeat`, `>servercount`, `>serverinfo`, `>snipe`, `>spoiler`, `>sup`, `>userinfo`, `>weather`")
        .addField("__Media:__", "`>alia`, `>awaken`, `>coinflip`, `>meme`, `>muda`, `>sus`")
        .addField("__Admin:__", "`>ban`, `>clear`, `>kick`");
        message.channel.send(embed);
        
    }
}