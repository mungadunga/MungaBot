module.exports = {
    name: 'matt',
    description: "matt card",
    execute(message, args){

        message.channel.send({files: ["./images/cards/matt.jpg"]});
        
    }
}