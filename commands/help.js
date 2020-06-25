module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
        message.channel.send(
            `
            Welcome to MungaBot!

            /help : u just used this command no need to explain lmao

            /info version : displays current version of the bot
            /info creator : hmm who created almighty munga bot? 
            /info release date : displays release date of munga bot
   
            Regular Commands:
            /sup : say hello to munga bot! ( mostly used to test if the bot is online lol )
            `
        );    
    }   
}