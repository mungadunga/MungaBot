module.exports = {
   name: 'rick2',
   description: "rick2 card",
   "rarity": "uncommon",
   execute(message, args){
      message.channel.send({files: ["./cards/rick2.jpg"]});
   }
}