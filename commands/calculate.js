module.exports = {
   name: 'calculate',
   description: "calculate command",
   execute(message, args){
      const math = require('mathjs');
      const Discord = require('discord.js');

      if(!args[0]){
         const embed = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .setTitle("Missing argument: >math<")
         .addField("Correct usage:", "`>calculate` <math>")
         .setFooter("For more info use `>info-calculate`");
         message.channel.send(embed);
      } else {
         let resp;
         try{
            resp = math.evaluate(args.join(' '));
         } catch (e) {
            const embed2 = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Please input a valid calculation.")
            .addField("Correct usage:", "`>calculate` <math>")
            .setFooter("For more info use `>info-calculate`");
            return message.channel.send(embed2);
         };
   
         const embed3 = new Discord.MessageEmbed()
         .setColor(0x7A7B80)
         .setTitle("Math calculation")
         .addField('Input', `\`\`\`${args.join('')}\`\`\``)
         .addField('Output', `\`\`\`js\n${resp}\`\`\``);
         message.channel.send(embed3);
      };
   },
};