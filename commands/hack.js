const { lsolve } = require('mathjs');

module.exports = {
   name: 'hack',
   description: "hack command",
   execute(message, args){
      const Discord = require('discord.js');
      let user = message.mentions.members.first();

      if(user){
         const msg = ('');
         message.channel.send('```Hacking ' + user.displayName + "...```").then((msg)=>{

            setTimeout(() => msg.edit('```Finding discord login...```'), 2000);
            setTimeout(() => msg.edit("```email address: " + user.displayName + "69420@sexymail.com```"), 4000);
            setTimeout(() => msg.edit("```password: ihaveasmalldick```"), 6000);
            setTimeout(() => msg.edit("```Accessing local files...```"), 8000);
            setTimeout(() => msg.edit("```1TB of child porn found!```"), 10000);
            setTimeout(() => msg.edit("```Dialling 911...```"), 12000);
            setTimeout(() => msg.edit("```0:01```"), 13000);

            setTimeout(() => { 
               message.channel.send("Hello? This is MungaBot, we found a pedophile... Hmm his IP address? Okay, wait a minute...").then((msg)=>{
                  setTimeout(() => { 
                     msg.edit("Okay done. Go hack " + user.displayName + " now ;)");
                  }, 7000); 
               });
            }, 13900); 

            setTimeout(() => msg.edit("```0:02```"), 14000); 
            setTimeout(() => msg.edit("```0:03```"), 15000); 
            setTimeout(() => msg.edit("```0:04```"), 16000); 
            setTimeout(() => msg.edit("```0:05```"), 17000); 
            setTimeout(() => msg.edit("```Getting IP...```"), 18000); 
            setTimeout(() => msg.edit("```223.158.16.151```"), 19500); 
            setTimeout(() => msg.edit("```Sending viruses to " + user.displayName + "...```"), 21000); 
            setTimeout(() => message.channel.bulkDelete(1), 23000); 
            setTimeout(() => user.send("UPLOADING VIRUS.EXE ████████████████] 98%"), 24000); 
            setTimeout(() => msg.edit("```Virus installed. The hack is complete.```"), 24000);
         });

      } else {
         const embedHELP = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .addField("Correct usage:", "`>hack` <@user>")
         .setFooter("For more info use `>info-hack`");
         message.channel.send(embedHELP);
      }
   }
}
