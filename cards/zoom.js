module.exports = {
    name: 'zoom',
    description: "zoom card",
    execute(message, args){

        message.channel.send({files: ["./cards/zoom.jpg"]});
        
    }
}