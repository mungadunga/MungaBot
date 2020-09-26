module.exports = {
    name: 'pp',
    description: "how big is your pp?",
    execute(message, args){
        
        const Discord = require('discord.js');

        var randomnumber = Math.ceil(Math.random() * 10)

        if(randomnumber > 0 || message.author.id === 602131435247239168){

            const embedmunga = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8=======================================================================================================================================================D")
            .setColor(0x002EFF)
            .setFooter('yeet');
            message.channel.send(embedmunga);

        } else if(randomnumber === 1){

            const embed = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8=D")
            .setColor(0x002EFF)
            .setFooter('haha smol pp');
            message.channel.send(embed);

        } else if(randomnumber === 2){

            const embed2 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8==D")
            .setColor(0x002EFF)
            .setFooter('haha smol pp');
            message.channel.send(embed2);

        } else if(randomnumber === 3){

            const embed3 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8===D")
            .setColor(0x002EFF)
            .setFooter('meh average pp');
            message.channel.send(embed3);

        } else if(randomnumber === 4){

            const embed4 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8====D")
            .setColor(0x002EFF)
            .setFooter('meh average pp');
            message.channel.send(embed4);

        } else if(randomnumber === 5){

            const embed5 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8=====D")
            .setColor(0x002EFF)
            .setFooter('meh average pp');
            message.channel.send(embed5);

        } else if(randomnumber === 6){

            const embed6 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8======D")
            .setColor(0x002EFF)
            .setFooter('nice penis bro');
            message.channel.send(embed6);

        } else if(randomnumber === 7){

            const embed7 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8=======D")
            .setColor(0x002EFF)
            .setFooter('nice penis bro');
            message.channel.send(embed7);

        } else if(randomnumber === 8){

            const embed8 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8========D")
            .setColor(0x002EFF)
            .setFooter("woah that's a huge dick");
            message.channel.send(embed8);

        } else if(randomnumber === 9){

            const embed9 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8=========D")
            .setColor(0x002EFF)
            .setFooter("woah that's a huge dick");
            message.channel.send(embed9);

        } else if(randomnumber === 10){

            const embed10 = new Discord.MessageEmbed()
            .setTitle("PP size calculator")
            .addField(message.author.username + "'s PP", "8==========D")
            .setColor(0x002EFF)
            .setFooter("GODDAMN IT IS HUGE");
            message.channel.send(embed10);

        } 
    }
}