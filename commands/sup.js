module.exports = {
   name: 'sup',
   description: "say hello to munga bot! ( mostly used to test if the bot is online lol )",
   execute(message, args){
      var d = Math.random();
      message.channel.send(d < 0.33 ? 'sup' : d > 0.66 ? 'hey hey' : 'hello there');
   }
}