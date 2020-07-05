module.exports = {
    name: 'version',
    description: "displays current version of the bot",
    execute(message, args){

        var version = '2.0.2'; 
        message.channel.send('Version ' + version )
       
    }    
}   
