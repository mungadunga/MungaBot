module.exports = {
    name: 'suscard',
    description: "suscard",
    execute(message, args){

        message.channel.send({files: ["./cards/suscard.jpg"]});
        
    }
}