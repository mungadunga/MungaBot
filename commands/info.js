module.exports = {
        name: 'info',
        description: "information about the bot",
        execute(message, args){

                const Discord = require('discord.js')
                const embed = new Discord.MessageEmbed()

                .setColor(0x7A7B80)
                .setTitle("Welcome to MungaBot!")
                .setDescription(
`
                   
__info commands:__
/info : u just used this command no need to explain lmao
/version : displays current version of the bot
/creator : hmm who created almighty munga bot? 
/date : displays release date of munga bot
/server : sends the link to some servers ( including the bot's official one )
                             
__regular commands:__
/sup : say hello to munga bot! ( mostly used to test if the bot is online lol )
/userinfo : info about user
/howgay : why are you gae?
/iq : how high is your iq?
/poll : create a simple yes or no poll!
/meme : sends a meme from r/meme
/snipe : try this command on someone! And if ur lucky, u may get a crit hit!
                             
__admin commands:__
/kick : kicks member
/ban : bans member
(do not use these commands on yourself it actually works lol)
`
                        
                )
                        
                message.channel.send(embed)
  
        }   
}