module.exports = {
        name: 'info',
        description: "information about the bot",
        execute(message, args){
            
message.channel.send(
`
Welcome to MungaBot!
    
__info commands:__
/info : u just used this command no need to explain lmao
/version : displays current version of the bot
/creator : hmm who created almighty munga bot? 
/date : displays release date of munga bot
    
__regular commands:__
/sup : say hello to munga bot! ( mostly used to test if the bot is online lol )
/profile : yay mungabot has profiles
/howgay : why are you gae?
/iq : how high is your iq?
/poll : create a simple yes or no poll!
/meme : sends a meme from r/meme
    
__admin commands:__
/kick : kicks member
/ban : bans member
(do not use these commands on yourself it actually works lol)
`
);    
}   
}