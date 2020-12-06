module.exports = {
    name: 'clap',
    description: "clap command",
    execute(message, args){

        let repeat = args.join(' ')

        if(!repeat){

            const Discord = require('discord.js');
            const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .addField("Correct usage:", "`>clap` <...>")
            .setFooter("For more info use `>info-clap`");
            message.channel.send(embed);
        } else {
            message.delete();
            message.channel.send(' :clap: ' + args.join(' :clap: '));
        }

    }
}