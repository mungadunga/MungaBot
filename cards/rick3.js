module.exports = {
   name: 'rick3',
   description: "rick3 card",
   "rarity": "rare",
   execute(message, args){
      message.channel.send({files: ["./cards/rick3.jpg"]});
   }
}