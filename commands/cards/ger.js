module.exports = {
   name: 'ger',
   description: "ger card",
   "rarity": "mythic",
   execute(message, args){
      message.channel.send({files: ["./cards/ger.jpg"]});
   }
}