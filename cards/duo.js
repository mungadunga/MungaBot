module.exports = {
    name: 'duo',
    description: "duo card",
    execute(message, args){

        message.channel.send({files: ["./cards/duo.jpg"]});
        
    }
}