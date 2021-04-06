module.exports = {
   name: 'alia',
   aliases: ["wubwub", "hohoho"],
   description: "alia command",
   execute(message, args){
      message.channel.send({files: ["./media/alia.mp4"]});
   },
};