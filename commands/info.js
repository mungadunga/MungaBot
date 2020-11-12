module.exports = {
        name: 'info',
        description: "full list of commands",
        execute(message, args){

                const Discord = require('discord.js');
                const embed = new Discord.MessageEmbed()

                .setColor(0x7A7B80)
                .setTitle("Welcome to MungaBot!")
                .setDescription("To know more about a certain command, use /info - <command> ( for example `/info-sup` )")
                .addField("__Recently Released:__:", "`/alia`, `/clap`, `/hack`")
                .addField("__Utility:__", "`/info`, `/cardsinfo`, `/userinfo`, `/serverinfo`, `/version`, `/creator`, `/dates`")
                .addField("__Regular Commands:__", "`/sup`, `/howgay`, `/iq`, `/insult`, `/repeat`, `/pp`, `/quiz`, `/sus`")
                .addField("__Cool commands;__", "`/online`,`/dm`,`/weather`,`/number`, `/snipe`, `/meme`, `/poll`, `/fight`")
                .addField("__Admin commands:__", "`/kick`, `/ban`, `/clear`")
                .addField("__Follow mungadunga on social media:__", "`/youtube`, `/twitter`, `/instagram`, `/discord`, `/reddit`, `/patreon`")
                .addField("__Invite mungabot to your server!__", "`/invite`");
                        
                message.channel.send(embed);
  
        }   
}