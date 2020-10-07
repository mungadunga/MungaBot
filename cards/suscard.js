module.exports = {
    name: 'suscard',
    description: "suscard",
    execute(message, args){

        message.channel.send({files: ["./images/cards/sus.jpg"]});
        
    }
}