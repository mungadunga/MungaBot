module.exports = {
    name: 'giorno',
    description: "giorno card",
    execute(message, args){

        message.channel.send({files: ["./cards/giorno.jpg"]});
        
    }
}