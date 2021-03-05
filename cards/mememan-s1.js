module.exports = {
   name: 'mememan-s1',
   description: "mememan-s1 card",
   "rarity": "epic",
   execute(message, args){
      message.channel.send({files: ["./cards/mememan-s1.jpg"]});
   }
}