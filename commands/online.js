module.exports = {
    name: 'online',
    description: "online command",
    execute(message, args){  
        message.guild.members.fetch().then(fetchedMembers => {
	        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            message.channel.send(`There are currently ${totalOnline.size} members online in this server! ( including bots )`);
        });
    }
}