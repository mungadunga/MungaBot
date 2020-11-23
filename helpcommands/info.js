module.exports = {
        name: 'info',
        description: "full list of commands",
        execute(message, args){

                const Discord = require('discord.js');
                const embed = new Discord.MessageEmbed()

                .setColor(0x7A7B80)
                .setTitle("Welcome to MungaBot!")
                .setDescription("To know more about a certain command, use >info-<command> ( for example `>info-sup` )")
                .addField("__Commands:__", "`>info-commands`")
                .addField("__Cards:__", "`>info-cards`")
                .addField("__Follow mungadunga on social media:__", "`>info-socialmedia`")
                .addField("__Invite mungabot to your server!__", "`>invite`");
                        
                message.channel.send(embed);
  
        }   
}