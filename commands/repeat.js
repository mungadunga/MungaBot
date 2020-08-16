module.exports = {
    name: 'repeat',
    description: "repeat command",
    execute(message, args){
        message.channel.send(args.join(' '));
        message.delete({timeout: 1});
    }
}