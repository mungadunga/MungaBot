module.exports = {
   name: 'coinflip',
   description: "coinflip command",
   execute(message, args){
      var d = Math.random();

      if (d < 0.5){
         message.channel.send('HEADS!');
         message.channel.send({files: ["./media/eurocoin2.png"]});
      } else if (d > 0.5){
         message.channel.send('TAILS!');
         message.channel.send({files: ["./media/eurocoin1.png"]});
      };
   },
};