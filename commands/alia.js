module.exports = {
   name: 'alia',
   description: "alia command",
   execute(message, args){
      message.channel.send({files: ["./media/alia.mp4"]});
   }
}