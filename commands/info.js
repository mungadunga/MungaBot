module.exports = {
        name: 'info',
        description: "full list of commands",
        execute(message, args){

                const Discord = require('discord.js');
                const embed = new Discord.MessageEmbed()

                .setColor(0x7A7B80)
                .setTitle("Welcome to MungaBot!")
                .setDescription("To know more about a certain command, use /info - <command name> ( for example `/info-sup` )")
                .addField("Full list of commands", "`/info`, `/version`, `/creator`, `/date`, `/invite`, `/sup`, `/userinfo`, `/howgay`, `/iq`, `/poll`, `/meme`, `/snipe`, `/number`, `/weather`, `/insult`, `/dm`, `/say`")
                .addField("Admin commands", "`/kick`, `/ban`, `/clear`")
                .addField("Follow mungadunga on social media!", "`/youtube`, `/twitter`, `/instagram`, `/discord`");
                        
                message.channel.send(embed);
  
        }   
}