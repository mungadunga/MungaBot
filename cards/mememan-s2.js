module.exports = {
    name: 'mememan-s2',
    description: "mememan-s2 card",
    execute(message, args){

        message.channel.send({files: ["./cards/mememan-s2.jpg"]});
        
    }
}