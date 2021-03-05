module.exports = {
   name: 'rick',
   description: "rick card",
   "rarity": "common",
   execute(message, args){
      message.channel.send({files: ["./cards/rick.jpg"]});
   }
}