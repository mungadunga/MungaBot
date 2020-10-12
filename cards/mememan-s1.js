module.exports = {
    name: 'mememan-s1',
    description: "mememan-s1 card",
    execute(message, args){

        message.channel.send({files: ["./cards/mememan-s1.jpg"]});
        
    }
}