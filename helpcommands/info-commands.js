module.exports = {
    name: 'info-commands',
    description: "info-commands command",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()

        .setColor(0x7A7B80)
        .setTitle("**Commands:**")
        .addField("List of all commands:",`
        
        __Regular Commands:__
        >clap
        >creator
        >dates
        >dm 
        >fight
        >hack
        >howgay
        >insult
        >iq
        >number
        >online
        >poll
        >pp 
        >quiz
        >repeat
        >servercount
        >serverinfo
        >snipe
        >spoiler
        >sup
        >userinfo
        >version
        >weather

        __Media:__
        >alia
        >awaken
        >coinflip
        >meme
        >muda
        >sus

        __Admin:__
        >ban
        >clear
        >kick
        `);
        
        message.channel.send(embed);
        
    }
}