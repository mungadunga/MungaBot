module.exports = {
    name: 'ger',
    description: "ger card",
    execute(message, args){

        message.channel.send({files: ["./cards/ger.jpg"]});
        
    }
}