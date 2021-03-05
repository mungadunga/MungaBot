module.exports = {
   name: 'mememan-sx',
   description: "mememan-sx card",
   "rarity": "mythic",
   execute(message, args){
      message.channel.send({files: ["./cards/mememan-sx.jpg"]});
   }
}