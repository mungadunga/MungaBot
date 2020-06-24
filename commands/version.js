module.exports = {
    name: 'version',
    description: "shows version of the bot",
    execute(message, args){
        if(args[1] === 'version'){
            message.channel.send('Version ' + version);
        }else{
            message.channel.send('Invalid Arguments')
        } 
    }
}