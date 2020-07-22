module.exports = {
        name: 'info',
        description: "full list of commands",
        execute(message, args){

                const Discord = require('discord.js');
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
/invite : invite mungabot to your server!
                             
__regular commands:__
/sup : say hello to munga bot! ( mostly used to test if the bot is online lol )
/userinfo : info about user
/howgay : why are you gae?
/iq : how high is your iq?
/poll : create a simple yes or no poll!
/meme : sends a meme from r/meme
/snipe : try this command on someone! And if ur lucky, u may get a crit hit!
/number : generates a random number between 1 and 5
/weather : use /weather and add a city name after the command to get the weather of that city!
/insult : do not try to insult mungabot... and do not prepare a comeback cuz ur about to get smashed...
                             
__admin commands:__
/kick : kicks member
/ban : bans member
(do not use these commands on yourself it actually works lol)

__follow mungadunga on social media!__
/youtube: sends link to munga's youtube channel
/twitter: sends link to munga's twitter
/instagram: sends link to munga's instagram accounts
/discord : sends the link of munga's discord server
`
                        
                );
                        
                message.channel.send(embed);
  
        }   
}