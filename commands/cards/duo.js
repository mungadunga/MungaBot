module.exports = {
   name: 'duo',
   description: "duo card",
   "rarity": "legendary",
   execute(message, args){
      message.channel.send({files: ["./cards/duo.jpg"]});
   }
}