module.exports = {
        name: 'info',
        description: "full list of commands",
        execute(message, args){

                const Discord = require('discord.js');
                const embed = new Discord.MessageEmbed()

                .setColor(0x7A7B80)
                .setTitle("Welcome to MungaBot!")
                .setDescription("To know more about a certain command, use /info - <command name> ( for example `/info-sup` )")
                .addField("__Recently Released:__:", "`/alia`, `/clap`")
                .addField("__Info Commands:__", "`/info`, `/version`, `/creator`, `/dates`, `/invite`, `/userinfo`, `/serverinfo`")
                .addField("__Regular Commands:__", "`/sup`, `/howgay`, `/iq`, `/insult`, `/repeat`, `/online`, `/pp`, `/quiz`, `/dm`, `/weather`, `/number`, `/snipe`, `/meme`, `/poll`, `/sus`, `/fight`")
                .addField("__Cards Commands:__", "`/cardsinfo`" )
                .addField("__Admin commands:__", "`/kick`, `/ban`, `/clear`")
                .addField("__Follow mungadunga on social media:__", "`/youtube`, `/twitter`, `/instagram`, `/discord`, `/reddit`, `/patreon`")
                        
                message.channel.send(embed);
  
        }   
}