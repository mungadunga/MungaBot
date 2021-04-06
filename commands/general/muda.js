module.exports = {
   name: 'muda',
   description: "muda command",
   execute(message, args){ 
      let d = Math.ceil(Math.random() * 13);
      if(d === 1){message.channel.send({files: ["./media/muda/muda1.mp4"]})} 
      else if(d === 2){message.channel.send({files: ["./media/muda/muda2.mp4"]})}
      else if(d === 3){message.channel.send({files: ["./media/muda/muda3.mp4"]})}
      else if(d === 4){message.channel.send({files: ["./media/muda/muda4.mp4"]})}
      else if(d === 5){message.channel.send({files: ["./media/muda/muda5.mp4"]})}
      else if(d === 6){message.channel.send({files: ["./media/muda/muda6.mp4"]})}
      else if(d === 7){message.channel.send({files: ["./media/muda/muda7.mp4"]})}
      else if(d === 8){message.channel.send({files: ["./media/muda/muda8.mp4"]})}
      else if(d === 9){message.channel.send({files: ["./media/muda/muda9.mp4"]})}
      else if(d === 10){message.channel.send({files: ["./media/muda/muda10.mp4"]})}
      else if(d === 11){message.channel.send({files: ["./media/muda/muda11.mp4"]})}
      else if(d === 12){message.channel.send({files: ["./media/muda/muda12.mp4"]})}
      else if(d === 13){message.channel.send({files: ["./media/muda/muda13.mp4"]})};
   },
};