module.exports = {
    name: 'uno',
    description: "uno reverse card",
    execute(message, args){

        message.channel.send({files: ["./cards/uno.jpg"]});
        
    }
}