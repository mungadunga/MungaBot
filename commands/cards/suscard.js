module.exports = {
   name: 'suscard',
   description: "suscard",
   "rarity": "rare",
   execute(message, args){
      message.channel.send({files: ["./cards/suscard.jpg"]});
   }
}