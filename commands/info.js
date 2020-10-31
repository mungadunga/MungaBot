module.exports = {
        name: 'info',
        description: "full list of commands",
        execute(message, args){

                const Discord = require('discord.js');
                const embed = new Discord.MessageEmbed()

                .setColor(0x7A7B80)
                .setTitle("Welcome to MungaBot!")
                .setDescription("To know more about a certain command, use /info - <command name> ( for example `/info-sup` )")
                .addField("__*Recently Released*__:", "`/fight`")
                .addField("Info Commands", "`/info`, `/version`, `/creator`, `/date`, `/invite`, `/userinfo`, `/serverinfo`")
                .addField("Regular Commands", "`/sup`, `/howgay`, `/iq`, `/insult`, `/repeat`, `/online`, `/pp`, `/quiz`, `/dm`, `/weather`, `/number`, `/snipe`, `/meme`, `/poll`, `/sus`")
                .addField("Cards Commands:", "`/cardsinfo`" )
                .addField("Admin commands", "`/kick`, `/ban`, `/clear`")
                .addField("Follow mungadunga on social media!", "`/youtube`, `/twitter`, `/instagram`, `/discord`, `/reddit`, `/patreon`")
                        
                message.channel.send(embed);
  
        }   
}