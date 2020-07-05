module.exports = {
    name: 'ban',
    description: "bans a member",
    guildOnly: true,
    execute(message, args){

        const prefix = '/'

        if (message.content.startsWith(`${prefix}ban`)) {

            let member = message.mentions.members.first();
            member.ban().then((member) => {
                message.channel.send('omg ' + member.displayName + ' has been banned by ' + message.author.username);
            }).catch(() => {
                if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
                    message.reply("You cannot ban members");
                } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                    message.reply("You cannont ban this member");
                }
            })
        }
    }

}
