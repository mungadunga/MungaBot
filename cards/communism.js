module.exports = {
    name: 'communism',
    description: "communism card",
    execute(message, args){

        message.channel.send({files: ["./images/cards/communism.jpg"]});
        
    }
}