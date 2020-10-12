module.exports = {
    name: 'mememan-sx',
    description: "mememan-sx card",
    execute(message, args){

        message.channel.send({files: ["./cards/mememan-sx.jpg"]});
        
    }
}