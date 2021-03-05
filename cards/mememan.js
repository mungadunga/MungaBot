module.exports = {
   name: 'mememan',
   description: "mememan card",
   "rarity": "rare",
   execute(message, args){
      message.channel.send({files: ["./cards/mememan.jpg"]});
   }
}