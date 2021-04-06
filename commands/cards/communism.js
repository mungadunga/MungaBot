module.exports = {
   name: 'communism',
   description: "mythic",
   rarity: "mythic",
   execute(message, args){
      message.channel.send({files: ["./cards/communism.jpg"]});
   }
}