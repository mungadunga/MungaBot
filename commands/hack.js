module.exports = {
    name: 'hack',
    description: "hack command",
    execute(message, args){

        const Discord = require('discord.js')
        let user = message.mentions.members.first()

        if(user){
            
            const msg = ('')

            message.channel.send('```Hacking ' + user.displayName + "...```").then((msg)=>{

                setTimeout(function(){ 
                    msg.edit('```Finding discord login...```');
                }, 2000);

                setTimeout(function(){ 
                    msg.edit("```email address: " + user.displayName + "69420@sexymail.com```");
                }, 4000); 

                setTimeout(function(){ 
                    msg.edit("```password: ihaveasmalldick```");
                }, 6000);

                setTimeout(function(){ 
                    msg.edit("```Accessing local files...```");
                }, 8000); 

                setTimeout(function(){ 
                    msg.edit("```1TB of child porn found!```");
                }, 10000); 

                setTimeout(function(){ 
                    msg.edit("```Dialling 911...```");
                }, 12000); 

                setTimeout(function(){ 
                    msg.edit("```0:01```");
                }, 13000); 

                setTimeout(function(){ 
                    msg.edit("```0:02```");
                }, 14000); 

                setTimeout(function(){ 
                    msg.edit("```0:03```");
                }, 15000); 

                setTimeout(function(){ 
                    msg.edit("```0:04```");
                }, 16000); 

                setTimeout(function(){ 
                    msg.edit("```0:05```");
                }, 17000); 

                setTimeout(function(){ 
                    msg.edit("```Getting IP...```");
                }, 18000); 

                setTimeout(function(){ 
                    msg.edit("```223.158.16.151```");
                }, 19000); 

                setTimeout(function(){ 
                    msg.edit("```Sending viruses to " + user.displayName + "...```");
                }, 21000); 

                setTimeout(function(){ 
                    message.channel.bulkDelete(1);
                }, 23000);

                setTimeout(function(){ 
                    user.send("UPLOADING VIRUS.EXE ████████████████] 98%");
                }, 24000);

                setTimeout(function(){ 
                    message.channel.send("```Virus installed. The hack is complete.```");
                }, 24000);
                
                setTimeout(function(){ 
                    message.channel.send("Hello? This is MungaBot, we found a pedophile... Hmm his IP address? Okay, wait a minute...").then((msg)=>{

                        setTimeout(function(){ 
                            msg.edit("Okay i dm'ed it to you ");
                        }, 7000); 

                    });
                }, 13900); 
            });

        } else {
            const embedHELP = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .addField("Correct usage:", "`/hack` <@user>")
            .setFooter("For more info use `/info-hack`");
            message.channel.send(embedHELP);
        }
    }
}
