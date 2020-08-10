module.exports = {
    name: 'say',
    description: "say command",
    execute(message, args){
        message.channel.send(args.join(' '));
        message.delete({timeout: 1});
    }
}