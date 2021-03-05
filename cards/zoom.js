module.exports = {
   name: 'zoom',
   description: "zoom card",
   "rarity": "rare",
   execute(message, args){
      message.channel.send({files: ["./cards/zoom.jpg"]});
   }
}