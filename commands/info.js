module.exports = {
    name: 'info',
    description: "information about the bot",
    execute(message, args){
        
        message.channel.send(
`
Welcome to MungaBot!

info commands:
/info : u just used this command no need to explain lmao
/version : displays current version of the bot
/creator : hmm who created almighty munga bot? 
/date : displays release date of munga bot

regular commands
/sup : say hello to munga bot! ( mostly used to test if the bot is online lol )
/profile : yay mungabot has profiles
/howgay : why are you gae?

admin commands:
/kick : kicks member
/ban : bans member
(do not use these commands on yourself it actually works lol)
`
        );    
    }   
}