module.exports = {
    name: 'rick',
    description: "rick card",
    execute(message, args){

        message.channel.send({files: ["./images/cards/rick-astley.jpg"]});
        
    }
}