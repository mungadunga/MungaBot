module.exports = {
   name: 'uno',
   description: "uno reverse card",
   "rarity": "mythic",
   execute(message, args){
      message.channel.send({files: ["./cards/uno.jpg"]});
   }
}