module.exports = {
    name: 'version',
    description: "displays current version of the bot",
    execute(message, args){

        var version = '1.2.0'; 
        message.channel.send('Version ' + version )
       
    }    
}   
