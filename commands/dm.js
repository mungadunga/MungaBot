module.exports = {
    name: 'dm',
    description: "dm someone using mungabot!",
    execute(message, args){

        let user = message.mentions.members.first();
        
        user.send(args.join(' '));
        message.delete({timeout: 1});
        message.author.send("DM sucessfully sent!");
    }
}