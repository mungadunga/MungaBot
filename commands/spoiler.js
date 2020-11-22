module.exports = {
    name: 'spoiler',
    description: "spoiler",
    execute(message, args){
        let letter = args.join("");
        message.delete();
        message.channel.send("||" + letter.split("").join('||||') + "||");
    }
}