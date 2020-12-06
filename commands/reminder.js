module.exports = {
    name: 'reminder',
    description: "reminder command",
    execute(message, args){

        const Discord = require('discord.js');
        let user = message.author;
        let t1 = args[0] * 60000
        let t2 = args.slice(1).join(" ")

        if(t1 > 0){

            if(t2){

                message.channel.send("Reminder successfully added!");

                const embed = new Discord.MessageEmbed()
                .setColor(0x7A7B80)
                .addField("Reminder:", t2)
                .setFooter("Reminder set " + (t1/60000) + " minutes ago")

                setTimeout(function(){ 
                    user.send(embed);
                    user.send("<@" + message.author.id + ">");
                }, t1); 

            } else if(!args[1]){

                const HELPembed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("Missing argument: >reminder<")
                .addField("Correct usage:", "`>reminder` <number> <reminder> ( for example >reminder 60 upload memes )")
                .setFooter("For more info use `>info-reminder`");
                message.channel.send(HELPembed);
            }

        } else if(!args[0]){

            const HELPembed3 = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Missing Argument: >number<")
            .addField("Correct usage:", "`>reminder` <number> <reminder>")
            .setFooter("For more info use `>info-reminder`");
            message.channel.send(HELPembed3);

        } else if(t1 != t1){

            const HELPembed2 = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Please enter a valid number")
            .addField("Correct usage:", "`>reminder` <number> <...>")
            .setFooter("For more info use `>info-reminder`");
            message.channel.send(HELPembed2);

        }
    }
}