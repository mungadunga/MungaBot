module.exports = {
    name: 'rick3',
    description: "rick3 card",
    execute(message, args){

        message.channel.send({files: ["./cards/rick3.jpg"]});
        
    }
}