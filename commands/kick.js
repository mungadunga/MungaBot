module.exports = {
    name: 'kick',
    description: "kicks a member",
    execute(message, args){

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' has been sucessfully yeeted out of the server');
        }).catch(() => {
            if (!message.member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("You cannot kick members");
            } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("You cannont kick this member");
            }
        })
    }

}


