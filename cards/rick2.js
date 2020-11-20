module.exports = {
    name: 'rick2',
    description: "rick2 card",
    execute(message, args){

        message.channel.send({files: ["./cards/rick2.jpg"]});
        
    }
}