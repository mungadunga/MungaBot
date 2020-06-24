module.exports = {
    name: 'sup',
    description: "says sup!",
    execute(message, args){
        message.channel.send('sup');
    }
}