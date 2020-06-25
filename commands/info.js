module.exports = {
    name: 'info',
    description: "bot info",
    execute(message, args){
        var version = '1.0.4';
        
            if(args[1] === 'version')
        message.channel.send('Version ' + version)
            if(args[1] === 'creator')
        message.channel.send('Munga The Great') 
            if(args[1] === 'release date')
        message.channel.send('4/20/69')       
    }    
}   
