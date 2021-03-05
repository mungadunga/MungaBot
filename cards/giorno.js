module.exports = {
   name: 'giorno',
   description: "giorno card",
   "rarity": "legendary",
   execute(message, args){
      message.channel.send({files: ["./cards/giorno.jpg"]}); 
   }
}