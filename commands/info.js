module.exports = {
    name: 'info',
    description: "information about the bot",
    execute(message, args){
        
        message.channel.send(
`
Welcome to MungaBot!

/info : u just used this command no need to explain lmao
/version : displays current version of the bot
/creator : hmm who created almighty munga bot? 
/date : displays release date of munga bot
   
/sup : say hello to munga bot! ( mostly used to test if the bot is online lol )
`
        );    
    }   
}