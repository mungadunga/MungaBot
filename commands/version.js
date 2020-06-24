module.exports = {
    name: 'version',
    description: "shows version of the bot",
    execute(message, args){

        var version = '1.0.3';

        if(args[1] === 'version'){
            message.channel.send('Version ' + version);
        }else{
            message.channel.send('Invalid Arguments')
        } 
    }
}