module.exports = {
    name: 'poll',
    description: "create a simple yes or no poll!",
    execute(message, args){

        const Discord = require('discord.js');

        function emoji (id) {
            return client.emojis.get(id).toString();
        }

        if(!args[0]) return message.channel.send('Proper usage: /poll <insert question here>');

        const embed = new Discord.MessageEmbed()
        
        .setColor(0x7A7B80)
        .setTitle("Poll created by " + message.author.username)
        .setDescription(args.join(' '))
        .setTimestamp();

        let msg = message.channel.send(embed).then(messageReaction => {

        messageReaction.react('707328509948985475');
        messageReaction.react('707328584263663708');

        message.delete({timeout: 1000});

        });
    }   
}