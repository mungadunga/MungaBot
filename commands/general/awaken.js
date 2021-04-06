module.exports = {
   name: 'awaken',
   description: "awaken command",
   execute(message, args){
      message.channel.send({files: ["./media/awaken.mp4"]});
   },
};