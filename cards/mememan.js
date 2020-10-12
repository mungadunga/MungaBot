module.exports = {
    name: 'mememan',
    description: "mememan card",
    execute(message, args){

        message.channel.send({files: ["./cards/mememan.jpg"]});
        
    }
}