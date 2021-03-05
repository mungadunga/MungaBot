module.exports = {
   name: 'matt',
   description: "matt card",
   "rarity": "epic",
   execute(message, args){
      message.channel.send({files: ["./cards/matt.jpg"]});
   }
}